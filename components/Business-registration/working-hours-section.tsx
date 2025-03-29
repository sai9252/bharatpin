"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface WorkingHoursSectionProps {
  formData: { workingHours: Record<string, { status: string; from: string; to: string }> }
  setFormData: (data: { workingHours: Record<string, { status: string; from: string; to: string }> }) => void
}

export default function WorkingHoursSection({ formData, setFormData }: WorkingHoursSectionProps) {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  const statusOptions = ["Open", "Close"]
  const timeOptions = [
    "12:00 AM",
    "01:00 AM",
    "02:00 AM",
    "03:00 AM",
    "04:00 AM",
    "05:00 AM",
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
  ]

  const handleWorkingHoursChange = (day: string, field: string, value: string) => {
    setFormData({
      ...formData,
      workingHours: {
        ...formData.workingHours,
        [day]: {
          ...formData.workingHours[day],
          [field]: value,
        },
      },
    })
  }

  const formatDay = (day: string) => {
    return day.charAt(0).toUpperCase() + day.slice(1)
  }

  return (
    <div className="border-t pt-6 mt-6">
      <h2 className="text-2xl font-medium mb-4">Working Hours</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="border p-2 text-left">Day</th>
              <th className="border p-2 text-left">Status</th>
              <th className="border p-2 text-left">Time From</th>
              <th className="border p-2 text-left">Time To</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day}>
                <td className="border p-2 text-left">{formatDay(day)}</td>
                <td className="border p-2">
                  <Select
                    value={formData.workingHours[day].status}
                    onValueChange={(value) => handleWorkingHoursChange(day, "status", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
                <td className="border p-2">
                  <Select
                    value={formData.workingHours[day].from}
                    onValueChange={(value) => handleWorkingHoursChange(day, "from", value)}
                    disabled={formData.workingHours[day].status === "Close"}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="--:-- --" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeOptions.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
                <td className="border p-2">
                  <Select
                    value={formData.workingHours[day].to}
                    onValueChange={(value) => handleWorkingHoursChange(day, "to", value)}
                    disabled={formData.workingHours[day].status === "Close"}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="--:-- --" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeOptions.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

