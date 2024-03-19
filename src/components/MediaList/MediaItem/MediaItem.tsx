import React, {FC} from 'react';
import Image from "next/image";

import {MediaTypes} from "@/types/media.types";

type MediaItemProps = {
    media:MediaTypes
}

export const MediaItem:FC<MediaItemProps> = ({media}) => {
    return (
        <div className="flex text-[#353844] max-w-[437px] mx-auto max-h-[336px]  bg-[#FFF] rounded-lg">
            <Image
                src={`/assets/${media.id}.png`}
                className="w-[120px] max-w-[186px] w-full"
                width={186}
                height={336}
                alt='description'
            />
            <div className="pl-2 pr-2 desktop:pl-[34px] py-5 desktop:py-10 desktop:pr-[30px]">
                <p className="text-dispS2 font-poppins font-bold ">{media.title}</p>
                {!!media.params.length &&
                    <ul className="pt-3 font-nunito marker:text-green list-outside list-disc ml-6">
                        {media.params.map(text =>
                            <li className="text-[#D2AD81]">
                                <p className="text-black text-parM">
                                    {text}
                                </p>
                            </li>
                        )}
                    </ul>
                }
                {!!media.subtext.length &&
                    <div className="pt-3 font-nunito">
                        {media.subtext.map(text =>
                            <p className="text-parM">{text}</p>
                        )}
                    </div>
                }
          </div>
        </div>
    );
};