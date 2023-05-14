'use client'
import "../../../styles/globals.css";
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import UploadForm from "../../../components/custom/uploader/page";

const CreatePost = () => {
    const [bannerImage, setBannerImage] = useState<File | null>(null);
    const [coverImage, setCoverImage] = useState<File | null>(null);
    // const router = useRouter();
    const { register, handleSubmit } = useForm();
    const [title, setTitle] = useState('')
    const [introduction, setIntroduction] = useState('')
    const [moreInformation, setMoreInformation] = useState('')
    const [mainIdea, updateMainIdea] = useState('')

    const [pictures, setPictures] = useState<File[]>([]);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const handleIntroductionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIntroduction(event.target.value)
    }
    const handleMoreInformationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMoreInformation(event.target.value)
    }



    const onDrop = (pictureFiles: File[]) => {
        setPictures([...pictures, ...pictureFiles]);
    };


    const onSubmit = async (data: { mainIdea: string }) => {
        try {
            let mydata = new FormData();
            mydata.append('banner' , pictures[0] as File);
            mydata.append('cover' , pictures[1] as File);
            mydata.append('main_idea' , mainIdea);
            mydata.append('title' , 'reza');
            mydata.append('information' , 'reza info');

            const config ={
                method:'post' ,
                url:'http://localhost:8000/api/post/create',
                data:mydata,
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }
            axios.request(config)
                .then((res)=>{
                    console.log(res)
                })
                .catch((err)=>{
                    console.log(err)
                })



        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>

            <div className={"mt-5"} />

            <div className="max-w-3xl mx-auto py-12">
                <h1 className="text-3xl font-bold mb-8">Create a New Post</h1>
                <form onSubmit={handleSubmit(onSubmit)}>



                    <div>
                        <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>


                    <div>
                        <label htmlFor="introduction" className="block text-lg font-semibold mb-2">Introduction</label>
                        <input
                            id="introduction"
                            type="text"
                            className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                            value={introduction}
                            onChange={handleIntroductionChange}
                        />
                    </div>

                    <UploadForm onDrop={onDrop} lable={"Cover Image"} />
                    <UploadForm onDrop={onDrop} lable={"Banner Image"} />


                    <div>
                        <label htmlFor="more-information" className="block text-lg font-semibold mb-2">More information</label>
                        <input
                            id="more-information"
                            type="text"
                            className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                            value={moreInformation}
                            onChange={handleMoreInformationChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="point" className="block text-lg font-semibold mb-2">point</label>
                        <input
                            id="point"
                            type="text"
                            className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                            // value={point}
                            // onChange={handlePoint}
                        />
                    </div>

                    <div>
                        <label htmlFor="tips" className="block text-lg font-semibold mb-2">tips</label>
                        <input
                            id="tips"
                            type="text"
                            className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                            // value={tips}
                            // onChange={handleTips}
                        />
                    </div>

                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="mainIdea">
                            Main Idea
                        </label>

                        <textarea
                            id="mainIdea"
                            name="mainIdea"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            // ref={register({ required: true })}
                            onChange={(e)=>updateMainIdea(e.target.value)}
                        ></textarea>

                    </div>


                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="more-information">
                            More information
                        </label>

                        <textarea
                            id="more-information"
                            name="more-information"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            // ref={register({ required: true })}
                        ></textarea>

                    </div>


                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="conclution">
                            conclution
                        </label>

                        <textarea
                            id="conclution"
                            name="conclution"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            // ref={register({ required: true })}
                        ></textarea>

                    </div>



                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Create Post
                        </button>
                    </div>


                </form>
            </div>


        </>
    );
};

export default CreatePost;
