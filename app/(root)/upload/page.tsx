"use client";

import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";
import { useFileInput } from "@/lib/hooks/useFileInput";
import { ChangeEvent, FormEvent, useState } from "react";

export default function page() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        visibility: "public",
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // Add your form submission logic here
            // For example: await uploadVideo(formData, video.file, thumbnail.file);
            console.log("Form submitted:", formData);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setIsSubmitting(false);
        }
    };

    const video = useFileInput(MAX_VIDEO_SIZE);
    const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

    return (
        <div className="wrapper-md upload-page">
            <h1>Upload a Video</h1>

            {error && <div className="error-field">{error}</div>}

            <form onSubmit={handleSubmit} className="rounded-20 shadow-10 gap-6 w-full flex flex-col py-7">
                <FormField
                    id="title"
                    label="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter a video title"
                />

                <FormField
                    id="description"
                    label="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter a video description"
                    as="textarea"
                />

                <FormField
                    id="visibility"
                    label="Visibility"
                    value={formData.visibility}
                    onChange={handleInputChange}
                    as="select"
                    options={[
                        { value: "public", label: "Public" },
                        { value: "private", label: "Private" },
                        { value: "unlisted", label: "Unlisted" }
                    ]}
                />
                <FileInput
                    id="video"
                    label="Video"
                    type="video"
                    accept="video/*"
                    file={video.file}
                    previewUrl={video.previewURL}
                    inputRef={video.inputRef}
                    onChange={video.handleChange}
                    onReset={video.resetFile}
                />

                <FileInput
                    id="thumbnail"
                    label="Thumbnail"
                    type="image"
                    accept="image/*"
                    file={thumbnail.file}
                    previewUrl={thumbnail.previewURL}
                    inputRef={thumbnail.inputRef}
                    onChange={thumbnail.handleChange}
                    onReset={thumbnail.resetFile}
                />
                <button type="submit" disabled={isSubmitting} className="submit-button">
                    {isSubmitting ? "Uploading..." : "Upload Video"}
                </button>
            </form>
        </div>
    );
}
