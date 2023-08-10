import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "../../App.css"
// Icons
import { FaStar } from "react-icons/fa"
// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper"

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15

  useEffect(() => {
    (async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      )
      if (data?.success) {
        setReviews(data?.data)
      }
    })()
  }, [])

  // console.log(reviews)

  return (
    <div className="text-white">
      <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
        <Swiper
          slidesPerView={2}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full "
        >
          {reviews.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex flex-col min-h-[150px] gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                      <h2 className="text-[12px] font-medium text-richblack-500">
                        {review?.course?.courseName}
                      </h2>
                    </div>
                  </div>
                  <p className="font-medium text-richblack-25">
                    {review?.review.split(" ").length > truncateWords
                      ? `${review?.review
                          .split(" ")
                          .slice(0, truncateWords)
                          .join(" ")} ...`
                      : `${review?.review}`}
                  </p>
                  <div className="flex items-center gap-2 ">
                    <h3 className="font-semibold text-yellow-100">
                      {review.rating.toFixed(1)}
                    </h3>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewSlider















// import React, { useEffect, useState } from "react"
// import ReactStars from "react-rating-stars-component"
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import "../../App.css"
// // Icons
// import { FaStar } from "react-icons/fa"
// // Import required modules
// import { Autoplay, FreeMode, Pagination } from "swiper"

// // Get apiFunction and the endpoint
// import { apiConnector } from "../../services/apiconnector"
// import { ratingsEndpoints } from "../../services/apis"

// function ReviewSlider() {
//   const [reviews, setReviews] = useState([])
//   const truncateWords = 15

//   useEffect(() => {
//     ;(async () => {
//       const { data } = await apiConnector(
//         "GET",
//         ratingsEndpoints.REVIEWS_DETAILS_API
//       )
//       if (data?.success) {
//         setReviews(data?.data)
//       }
//     })()
//   }, [])

//   // console.log(reviews)

//   return (
//     <div className="text-white">
//       <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
//         <Swiper
//           slidesPerView={4}
//           spaceBetween={25}
//           loop={true}
//           freeMode={true}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//           modules={[FreeMode, Pagination, Autoplay]}
//           className="w-full "
//         >
//           {reviews.map((review, i) => {
//             return (
//               <SwiperSlide key={i}>
//                 <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25">
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={
//                         review?.user?.image
//                           ? review?.user?.image
//                           : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
//                       }
//                       alt=""
//                       className="h-9 w-9 rounded-full object-cover"
//                     />
//                     <div className="flex flex-col">
//                       <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
//                       <h2 className="text-[12px] font-medium text-richblack-500">
//                         {review?.course?.courseName}
//                       </h2>
//                     </div>
//                   </div>
//                   <p className="font-medium text-richblack-25">
//                     {review?.review.split(" ").length > truncateWords
//                       ? `${review?.review
//                           .split(" ")
//                           .slice(0, truncateWords)
//                           .join(" ")} ...`
//                       : `${review?.review}`}
//                   </p>
//                   <div className="flex items-center gap-2 ">
//                     <h3 className="font-semibold text-yellow-100">
//                       {review.rating.toFixed(1)}
//                     </h3>
//                     <ReactStars
//                       count={5}
//                       value={review.rating}
//                       size={20}
//                       edit={false}
//                       activeColor="#ffd700"
//                       emptyIcon={<FaStar />}
//                       fullIcon={<FaStar />}
//                     />
//                   </div>
//                 </div>
//               </SwiperSlide>
//             )
//           })}
//           {/* <SwiperSlide>Slide 1</SwiperSlide> */}
//         </Swiper>
//       </div>
//     </div>
//   )
// }

// export default ReviewSlider




































// import React, { useEffect, useState } from 'react'

// import {Swiper, SwiperSlide} from "swiper/react"
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import { Autoplay,FreeMode,Navigation, Pagination}  from 'swiper'
// import ReactStars from "react-rating-stars-component"
// import { apiConnector } from '../../services/apiconnector'
// import { ratingsEndpoints } from '../../services/apis'
// import { FaStar } from 'react-icons/fa'


// const ReviewSlider = () => {

//     const [reviews, setReviews] = useState([]);
//     const truncateWords = 15;


//     useEffect(() => {
//         const fetchAllReviews = async() => {
//             const {data} = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API)
//             console.log("LOgging response in rating", data);

//             if(data?.success) {
//                 setReviews(data?.data);
//             }

//             console.log("Printing Reviews", reviews);

//         }
//         fetchAllReviews();
//     }, []);


//   return (
//     <div className='text-white'>
//         <div className='h-[190px] max-w-maxContent'>
//             <Swiper
//             slidesPerView={4}
//             spaceBetween={24}
//             loop={true}
//             freeMode={true}
//             autoplay={{
//                 delay: 2500,
//             }}
//             modules={[FreeMode, Pagination, Autoplay]}
//             className='w-full'
//             >

//                 {
//                     reviews.map((review, index) => (
//                         <SwiperSlide key={index}>
//                             <img
//                             src={review?.user?.image
//                              ? review?.user?.image
//                               : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`}
//                               alt='Profile Pic'
//                               className='h-9 w-9 object-cover rounded-full'
//                             />
//                             <p>{review?.user?.firstName} {review?.user?.lastName}</p>
//                             <p>{review?.course?.courseName}</p>
//                             <p>
//                                 {review?.review}
//                             </p>
//                             <p>{review?.rating.toFixed(1)}</p>
//                             <ReactStars 
//                                 count={5}
//                                 value={review.rating}
//                                 size={20}
//                                 edit={false}
//                                 activeColor="#ffd700"
//                                 emptyIcon={<FaStar />}
//                                 fullIcon={<FaStar />}
//                             />
//                         </SwiperSlide>
//                     ))
//                 }

//             </Swiper>
//         </div>
//     </div>
//   )
// }

// export default ReviewSlider
