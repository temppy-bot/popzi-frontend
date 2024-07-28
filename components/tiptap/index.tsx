'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl w-full  rounded-lg border min-h-[400px]  border-input  mx-auto focus:outline-none'
      }
    }
  });

 

  return (
    <div className='flex flex-col justify-stretch h-full w-[100%]'>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
