import React, { useState } from 'react';
import { FaBold, FaItalic, FaUnderline, FaAlignCenter, FaAlignLeft, FaAlignRight } from 'react-icons/fa';
import { type Editor } from '@tiptap/react';

const fontSizes = ['12px', '14px', '16px', '18px', '20px'];

interface TextEditorToolbarProps {
    editor: Editor | null;
}

const TextEditorToolbar: React.FC<TextEditorToolbarProps> = ({ editor }) => {
    const [selectedFontSize, setSelectedFontSize] = useState('16px');

    const handleFontSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const fontSize = event.target.value;
        setSelectedFontSize(fontSize);
        editor?.chain().focus().setFontSize(fontSize).run();
    };


    if (!editor) {
        return null;
    }

    return (
        <div className="flex items-center p-2 bg-transparent gap-2 my-2">
            <select
                value={selectedFontSize}
                onChange={handleFontSizeChange}
                className={`mr-2 p-2 border-2 border-lightgrey rounded-md  ${editor.isActive('Bold') ? 'bg-btnbg text-white' : 'bg-lightgrey  text-lighterblack'
                    }`}
            >
                {fontSizes.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`mr-2 p-2 border-2 border-lightgrey rounded-md  ${editor.isActive('bold') ? 'bg-btnbg text-white' : 'bg-lightgrey  text-lighterblack'
                    }`}
            >
                <FaBold />

            </button>

            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`mr-2 p-2 border-2 border-lightgrey rounded-md  ${editor.isActive('italic') ? 'bg-btnbg text-white' : 'bg-lightgrey  text-lighterblack'
                    }`}
            >
                <FaItalic />
            </button>
            <button
                onClick={() => editor.commands.toggleUnderline()
                }
                className={`mr-2 p-2 border-2 border-lightgrey rounded-md  ${editor.isActive('underline') ? 'bg-btnbg text-white' : 'bg-lightgrey  text-lighterblack'
                    }`}
            >
                <FaUnderline />


            </button>
            <button
                onClick={() => editor.commands.setTextAlign('left')
                }
                className={`mr-2 p-2 border-2 border-lightgrey rounded-md  ${editor.isActive({ textAlign: 'left' }) ? 'bg-btnbg text-white' : 'bg-lightgrey  text-lighterblack'
                    }`}
            >
                <FaAlignLeft />



            </button>
            <button
                onClick={() => editor.commands.setTextAlign('center')
                }
                className={`mr-2 p-2 border-2 border-lightgrey rounded-md  ${editor.isActive({ textAlign: 'center' }) ? 'bg-btnbg text-white' : 'bg-lightgrey  text-lighterblack'
                    }`}
            >
                <FaAlignCenter />
            </button>
            <button
                onClick={() => editor.commands.setTextAlign('right')
                }
                className={`mr-2 p-2 border-2 border-lightgrey rounded-md  ${editor.isActive({ textAlign: 'right' }) ? 'bg-btnbg text-white' : 'bg-lightgrey  text-lighterblack'
                    }`}
            >
                <FaAlignRight />

            </button>


        </div>
    );
};

export default TextEditorToolbar;
