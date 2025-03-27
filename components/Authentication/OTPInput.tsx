import React, { useRef, useState } from 'react';

interface OTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
  onChange?: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ 
  length = 6, 
  onComplete, 
  onChange 
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    // Only allow single digit input
    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Trigger onChange callback
      onChange?.(newOtp.join(''));

      // Move focus to the next input
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Check if OTP is complete
      if (index === length - 1 && newOtp.every((digit) => digit !== '')) {
        onComplete?.(newOtp.join(''));
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    // Move focus or clear input on backspace
    if (e.key === 'Backspace') {
      if (otp[index] === '') {
        // Move focus to previous input if current is empty
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      } else {
        // Clear current input if not empty
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        onChange?.(newOtp.join(''));
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text').slice(0, length);
    
    if (pastedText.match(/^\d+$/)) {
      const newOtp = pastedText.split('').concat(Array(length - pastedText.length).fill(''));
      setOtp(newOtp);
      onChange?.(newOtp.join(''));

      // Focus on the last input after paste
      inputRefs.current[pastedText.length - 1]?.focus();

      // Check if OTP is complete
      if (pastedText.length === length) {
        onComplete?.(newOtp.join(''));
      }
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          pattern="\d*"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          className="w-10 h-10 text-center text-lg border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500
            transition-all duration-200 ease-in-out"
        />
      ))}
    </div>
  );
};

export default OTPInput;