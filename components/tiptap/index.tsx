'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextEditorToolbar from '../utitlies/texteditortoolbar';
import Image from 'next/image';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import FontSize from '@/utilies/fontsize';
import TextStyle from '@tiptap/extension-text-style';
interface TiptapProps {
  isExpand: boolean;
  handleIsExpand: () => void
}
const Tiptap = ({ isExpand, handleIsExpand }: TiptapProps) => {
  const editor = useEditor({
    extensions: [StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle, 
      FontSize, 
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base px-2 lg:prose-lg xl:prose-2xl w-full h-full focus:outline-none'
      }
    },
    onUpdate({editor}){
      console.log(editor.getHTML())
    }
  });



  return (
    <div className={`flex flex-col rounded-2xl border border-gray-300 justify-stretch ${isExpand ? "h-[600px]" : "h-full"} w-[100%]`}>
      <div className='flex justify-between items-center '>
        <TextEditorToolbar editor={editor} />
        <div className='hidden md:flex items-center gap-1'>
          <button
            onClick={handleIsExpand}
            className={`p-[0.6rem] border-2 border-lightgrey rounded-md  ${isExpand ? 'bg-btnbg text-white' : 'bg-lightgrey  text-lighterblack'
              }`}
          >

            <Image
              src="/mi_expand.png"
              alt="Toggle Sidebar"
              width={15}
              height={15}
              // objectFit='contain'
            />
          </button>

          <button

            className={`mr-2 py-2 px-8 border-2 border-lightgrey text-sm font-fpublic font-normal rounded-lg  bg-btnbg text-white`}
          >

            Save
          </button>
        </div>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
