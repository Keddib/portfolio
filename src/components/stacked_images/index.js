

// max images is 4. if we add one we need to add styling for it

import Image from "next/image";

export default function StackedImages({ images }) {

  function hundleStartClick(e) {
    console.log('s', e.target);
  }

  function hundleImageClick(e) {
    e.target.style.display = 'none';
    console.log('i', e.target.style.display);
  }

  return (
    <div id="stacked--images" className="w-full h-full stacked-images">
      <div onClick={hundleStartClick} className="absolute flex items-center justify-center w-[80%] h-full bg-transparent border border-solid cursor-pointer top-1/2 left-1/2 border-secondary stacked-image-delete">
        <p className="absolute text-base font-bold uppercase -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2 font-display text-secondary">
          Start over
        </p>
      </div>
      {
        images.map((img, index) => {
          return (
            <div key={index} onClick={hundleImageClick} className="absolute h-full cursor-pointer w-[80%] top-1/2 left-1/2 stacked-image">
              <div className="relative w-full h-full bg-secondary overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={img}
                    alt="me at work"
                    fill
                    placeholder="blur" // Optional blur-up while loading
                  />
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
