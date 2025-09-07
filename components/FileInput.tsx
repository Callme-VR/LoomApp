import Image from 'next/image';
import { useRef, useState } from 'react';

interface FileInputProps {
    id?: string;
    label?: string;
    file?: File | null;
    previewUrl?: string | null;
    inputRef?: React.RefObject<HTMLInputElement>;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onReset?: () => void;
    type?: string;
    accept?: string;
}

export default function FileInput({
    id = 'file',
    label = 'File',
    file = null,
    previewUrl = null,
    inputRef,
    onChange,
    onReset,
    type = 'file',
    accept
}: FileInputProps) {
    const [localFile, setLocalFile] = useState<File | null>(file);
    const [localPreviewUrl, setLocalPreviewUrl] = useState<string | null>(previewUrl);
    const localInputRef = useRef<HTMLInputElement>(null);
    
    const currentInputRef = inputRef || localInputRef;
    const currentFile = file || localFile;
    const currentPreviewUrl = previewUrl || localPreviewUrl;
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setLocalFile(selectedFile);
            const url = URL.createObjectURL(selectedFile);
            setLocalPreviewUrl(url);
        }
        if (onChange) {
            onChange(event);
        }
    };
    
    const handleReset = () => {
        setLocalFile(null);
        if (localPreviewUrl) {
            URL.revokeObjectURL(localPreviewUrl);
        }
        setLocalPreviewUrl(null);
        if (currentInputRef.current) {
            currentInputRef.current.value = '';
        }
        if (onReset) {
            onReset();
        }
    };
    
    const isVideo = type === 'video' || accept?.includes('video');
    const acceptType = accept || (type === 'video' ? 'video/*' : type === 'image' ? 'image/*' : '*/*');

    return (
        <section className="file-input">
            <label htmlFor={id}>{label}</label>
            <input 
                type="file" 
                id={id} 
                ref={currentInputRef} 
                accept={acceptType} 
                onChange={handleFileChange} 
                hidden
            />
            {
                !currentPreviewUrl ? (
                    <figure onClick={()=>currentInputRef.current?.click()}>
                        <Image src="/assets/icons/upload.svg" alt="upload" width={24} height={24} />
                        <p>Click to upload your {label.toLowerCase()}</p>
                    </figure>
                ) : (
                    <div>
                        {isVideo ? (
                            <video src={currentPreviewUrl} controls />
                        ) : (
                            <Image src={currentPreviewUrl} alt="preview" fill />
                        )}
                        <button type="button" onClick={handleReset}>
                            <Image src="/assets/icons/close.svg" alt="close" width={16} height={16} />
                        </button>
                        <p>
                            {currentFile?.name}
                        </p>
                    </div>
                )
            }
        </section>
    )
}
