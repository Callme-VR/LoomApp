import { ChangeEvent, useRef, useState } from "react"

export const useFileInput = (maxSize: number) => {
    const [file, setFile] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState<string>('');
    const [duration, setDuration] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);


    //  handle file upload and changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const selectedFile = e.target.files[0];

            if (selectedFile.size > maxSize) return;

            if (previewURL) URL.revokeObjectURL(previewURL);

            setFile(selectedFile);
            const objectUrl = URL.createObjectURL(selectedFile);
            setPreviewURL(objectUrl);

            if (selectedFile.type.startsWith('video')) {
                const video = document.createElement('video');
                video.preload = 'metadata';
                video.src = objectUrl;

                video.onloadedmetadata = () => {
                    if (isFinite(video.duration) && video.duration > 0) {
                        setDuration(Math.round(video.duration));
                    } else {
                        setDuration(0);
                    }
                }
            }
        }
    }


    // reset file change
    const resetFile = () => {
        if (previewURL) URL.revokeObjectURL(previewURL);

        setFile(null);
        setPreviewURL('');
        setDuration(0);

        if (inputRef.current) inputRef.current.value = '';
    }

    return {
        file,
        previewURL,
        duration,
        inputRef,
        handleChange,
        resetFile
    };
}
