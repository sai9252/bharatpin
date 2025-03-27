import Others from "@/components/Others";


export default function OtherPagesLayout({ children }: {children:React.ReactNode}) {

  
  return (
    <div className=" mx-auto px-4">
      
      <div className="md:flex md:flex-row gap-8">
        <div className="md:w-[65%] border-b-2 pb-4 border-b-gray-300 rounded-md">
          {children}
        </div>
        <Others/>
      </div>
    </div>
  );
}