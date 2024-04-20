import React from 'react';
import Section from '../section';
import { Button, Title } from '@mantine/core';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { LuClock3 } from 'react-icons/lu';
import { FaArrowRotateLeft, FaClockRotateLeft } from 'react-icons/fa6';
import { CgSandClock } from 'react-icons/cg';

import '@mantine/tiptap/styles.css';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';

const content =
    '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';


const AnswerText = () => {

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        content,
    });

    return (
        <div>
            <Section>
                <div className='text-center w-1/3 mx-auto text-gray-500 text-sm'>
                    <Title className='my-10' order={3}>What are some of your leadership experiences?</Title>
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-white p-5 w-full rounded-2xl shadow-xl'>
                                <div className='flex justify-between'>
                                    <div className='px-3 bg-gray-200 rounded-full'>00:00</div>
                                    <div className='px-3 bg-gray-200 rounded-full'>Recording</div>
                                </div>

                                <div className='flex justify-center items-center gap-3 pt-20'>
                                    <RichTextEditor editor={editor}>
                                        <RichTextEditor.Toolbar sticky stickyOffset={60}>
                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.Bold />
                                                <RichTextEditor.Italic />
                                                <RichTextEditor.Underline />
                                                <RichTextEditor.Strikethrough />
                                                <RichTextEditor.ClearFormatting />
                                                <RichTextEditor.Highlight />
                                                <RichTextEditor.Code />
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.H1 />
                                                <RichTextEditor.H2 />
                                                <RichTextEditor.H3 />
                                                <RichTextEditor.H4 />
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.Blockquote />
                                                <RichTextEditor.Hr />
                                                <RichTextEditor.BulletList />
                                                <RichTextEditor.OrderedList />
                                                <RichTextEditor.Subscript />
                                                <RichTextEditor.Superscript />
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.Link />
                                                <RichTextEditor.Unlink />
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.AlignLeft />
                                                <RichTextEditor.AlignCenter />
                                                <RichTextEditor.AlignJustify />
                                                <RichTextEditor.AlignRight />
                                            </RichTextEditor.ControlsGroup>

                                            <RichTextEditor.ControlsGroup>
                                                <RichTextEditor.Undo />
                                                <RichTextEditor.Redo />
                                            </RichTextEditor.ControlsGroup>
                                        </RichTextEditor.Toolbar>

                                        <RichTextEditor.Content />
                                    </RichTextEditor>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='absolute left-64 top-[3100px]'>
                                <p className='text-7xl text-gray-300 font-bold'>01</p>
                                <p>02</p>
                                <p>03</p>
                                <p>04</p>
                            </div>
                            <div className='flex gap-20 bg-white absolute left-32 top-[3205px]'>
                                <div className='h-3 w-16 bg-gray-300 my-auto'>

                                </div>
                                <div>
                                    <p className='my-0 flex items-center '> <RiQuestionAnswerLine /> Question</p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex gap-10'>
                                <p className="flex items-center gap-1"><LuClock3 />Answer time 01:00</p>
                                <p className="flex items-center gap-1"><FaClockRotateLeft />2 of 4 attempt(s) left</p>
                            </div>
                            <p className="flex items-start text-start gap-1"><CgSandClock className='text-2xl' />We recommend taking no more than 10m 00s to complete this question. Your time: <span className='text-blue-500 font-bold items-end'>09:48</span></p>
                        </div>
                        <div className='space-x-5 py-5'>
                            <Button variant="outline" color="black" radius="xl"><FaArrowRotateLeft /> Re-record</Button>
                            <Button variant="filled" radius="xl">Save and continue</Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default AnswerText;