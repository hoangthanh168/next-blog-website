import React from "react";

const FeaturedArticles = () => {
  return (
    <>
      <section className="featured-articles ">
        <div className="container">
          <div className="row flex">
            <div className="col-left w-[30%] font-medium text-sm pr-5">
              <div className="article-item flex pb-3 border-b border-gray-300s mb-3">
                <figure className="min-w-[120px] h-20">
                  <img
                    className="h-full w-full object-cover "
                    src="https://znews-photo.zingcdn.me/w960/Uploaded/spluwao/2023_02_19/thumb.jpg"
                    alt=""
                  />
                </figure>
                <div className="pl-3">
                  <span>Doanh thu Thảo Cầm Viên cao kỷ lục</span>
                </div>
              </div>
              <div className="article-item flex pb-3 border-b border-gray-300s mb-3">
                <figure className="min-w-[120px] h-20">
                  <img
                    className="h-full w-full object-cover "
                    src="https://znews-photo.zingcdn.me/w960/Uploaded/spluwao/2023_02_19/thumb.jpg"
                    alt=""
                  />
                </figure>
                <div className="pl-3">
                  <span>Doanh thu Thảo Cầm Viên cao kỷ lục</span>
                </div>
              </div>{" "}
              <div className="article-item flex pb-3 border-b border-gray-300s mb-3">
                <figure className="min-w-[120px] h-20">
                  <img
                    className="h-full w-full object-cover "
                    src="https://znews-photo.zingcdn.me/w960/Uploaded/spluwao/2023_02_19/thumb.jpg"
                    alt=""
                  />
                </figure>
                <div className="pl-3">
                  <span>Doanh thu Thảo Cầm Viên cao kỷ lục</span>
                </div>
              </div>{" "}
              <div className="article-item flex pb-3 border-b border-gray-300s mb-3">
                <figure className="min-w-[120px] h-20">
                  <img
                    className="h-full w-full object-cover "
                    src="https://znews-photo.zingcdn.me/w960/Uploaded/spluwao/2023_02_19/thumb.jpg"
                    alt=""
                  />
                </figure>
                <div className="pl-3">
                  <span>Doanh thu Thảo Cầm Viên cao kỷ lục</span>
                </div>
              </div>
            </div>
            <div className="col-middle w-[40%] font-bold text-lg">
              <figure>
                <img
                  src="https://znews-photo.zingcdn.me/w1000/Uploaded/spluaaa/2023_02_18/samsung_galaxy_s23_ultra_26.jpg"
                  alt=""
                />
              </figure>
              <div className="pt-3">
                <span>Cuộc đua mà Apple và Samsung vẫn đang dồn toàn lực</span>
              </div>
            </div>
            <div className="col-right w-[30%] pl-3 font-semibold">
              <div className="article-item pb-3  mb-3">
                <figure className="w-full h-40">
                  <img
                    className="h-full w-full object-cover "
                    src="https://znews-photo.zingcdn.me/w960/Uploaded/spluwao/2023_02_19/thumb.jpg"
                    alt=""
                  />
                </figure>
                <div>
                  <span>Doanh thu Thảo Cầm Viên cao kỷ lục</span>
                </div>
              </div>
              <div className="article-item pb-3 mb-3">
                <figure className="w-full h-40">
                  <img
                    className="h-full w-full object-cover "
                    src="https://znews-photo.zingcdn.me/w960/Uploaded/spluwao/2023_02_19/thumb.jpg"
                    alt=""
                  />
                </figure>
                <div>
                  <span>Doanh thu Thảo Cầm Viên cao kỷ lục</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedArticles;
