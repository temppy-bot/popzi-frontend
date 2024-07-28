import Tiptap from "@/components/tiptap";
import FileUpload from "@/components/fileupload";
import Cards from "@/components/cards";
import Image from "next/image";

export default function Home() {
  const sampleData = [
    {
      date: new Date('1982-10-18'),
      imageUrl: '/card.png',
      fileName: 'file1.pdf',
    },
    {
      date: new Date('1983-05-22'),
      imageUrl: '/card.png',
      fileName: 'file2.pdf',
    },
    {
      date: new Date('1984-08-30'),
      imageUrl: '/card.png',
      fileName: 'file3.pdf',
    },
    {
      date: new Date('1985-12-05'),
      imageUrl: '/card.png',
      fileName: 'file4.pdf',
    },
  ];
  return (
    <main
      className={`flex flex-col min-h-screen gap-3 p-3`}
    >
      <div className="flex flex-col md:flex-row  w-full justify-between gap-3">
        <div className="md:w-[60%] w-full ">
          <Tiptap />
        </div>
        <div className="md:w-[40%] w-full">
          <FileUpload onUpload={() => { }} />
        </div>
      </div>

      <div>
        <div className="flex mb-2 justify-between items-center w-full">
          <h1 className="text-base font-fpublic font-bold text-lightierBlack">Recent files</h1>
          <button

            className=" flex py-1 px-2 gap-1 items-center font-[500] text-lightgreen font-fpublic  text-sm rounded-lg bg-transparent border border-iconcolor"
          >
            <Image
              src="/uil_sort.png"
              alt="uil_sort"
              width={20}
              height={20}
              objectFit='contain'
            />
            <p>Sort</p>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sampleData.map((data, index) => (
            <Cards
              key={index}
              date={data.date}
              imageUrl={data.imageUrl}
              fileName={data.fileName}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
