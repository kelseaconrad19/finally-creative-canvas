
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<any>(null);

  return (
    <div className="rich-text-editor">
      <Editor
        apiKey="ctiplzoalh81zihyf1yzylkco3luwb91h6souzhh88r2zbzr"
        onInit={(evt, editor) => {
          editorRef.current = editor;
        }}
        initialValue={value}
        value={value}
        onEditorChange={(newValue) => onChange(newValue)}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | image media link | help',
          content_style: 'body { font-family:Inter,Arial,sans-serif; font-size:16px }',
          image_title: true,
          automatic_uploads: true,
          file_picker_types: 'image',
          // Set skin and content_css to prevent read-only issues
          skin: 'oxide',
          content_css: 'default',
          readonly: false,
          browser_spellcheck: true,
          file_picker_callback: function (cb, value, meta) {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');

            input.onchange = function () {
              if (input.files) {
                const file = input.files[0];
                const reader = new FileReader();
                reader.onload = function () {
                  const id = 'blobid' + (new Date()).getTime();
                  const blobCache = editorRef.current.editorUpload.blobCache;
                  const base64 = (reader.result as string).split(',')[1];
                  const blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);
                  cb(blobInfo.blobUri(), { title: file.name });
                };
                reader.readAsDataURL(file);
              }
            };
            input.click();
          }
        }}
      />
    </div>
  );
};

export default RichTextEditor;
