import React from 'react';

import {mockMedia} from "@/mockData/mockMedia";

import {MediaItem} from "@/components/MediaList/MediaItem/MediaItem";
import {Button} from "@/components/Button/Button";

export const MediaList = () => {
    return (
        <div>
            <p className="px-2 max-w-[730px] mx-auto font-bold text-dispS1 desktop:text-dispXL text-center text-[#1B264F]">We make  creative media that <span className="text-[#506BCA]">adds value</span></p>
            <div className="max-w-[1400px] px-4 pt-8 desktop:pt-20 flex flex-wrap gap-x-[30px] gap-y-3 desktop:gap-y-[40px]">
                {mockMedia.map(media => (
                    <MediaItem key={media.id} media={media}/>
                ))}
            </div>
            <div className="mt-6 desktop:mt-20 flex mx-auto">
                <Button classname={'max-w-[200px] mx-auto desktop:max-w-[315px] w-full rounded-xl h-[60px]'}>GET STARTED</Button>
            </div>
        </div>

    );
};

