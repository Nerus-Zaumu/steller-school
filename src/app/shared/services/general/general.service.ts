/* eslint-disable max-len */
import { Pdf, Link, Image, Video } from './../../interfaces/multimedia.model';
import { Fees } from './../../interfaces/fees.model';
import { Injectable } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  schoolFeeData: Fees[] = [
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    }
  ];

  examFeeData: Fees[] = [
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    }
  ];

  activityFeeData: Fees[] = [
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    },
    {
      description: 'School Fees for January',
      status: 'Paid',
      date: '06 May',
      totalFee: 2000,
      extraFee: 600,
      lateCharges: 329,
      discount: `${0.2 * 100}`,
      discountAmount: 700,
      paidFee: 16600,
      currency: '₹',
    }
  ];

  documentHolder: Pdf[] = [
    {thumbnail: 'assets/icon/pdf.svg', title: 'Social Science Syllabus', oneLiner: 'Syllabus for 2020 batch', pages: '12', content: ''},
    {thumbnail: 'assets/icon/pdf.svg', title: 'Social Science Syllabus', oneLiner: 'Syllabus for 2020 batch', pages: '12', content: ''},
    {thumbnail: 'assets/icon/pdf.svg', title: 'Social Science Syllabus', oneLiner: 'Syllabus for 2020 batch', pages: '12', content: ''},
    {thumbnail: 'assets/icon/pdf.svg', title: 'Social Science Syllabus', oneLiner: 'Syllabus for 2020 batch', pages: '12', content: ''},
    {thumbnail: 'assets/icon/pdf.svg', title: 'Social Science Syllabus', oneLiner: 'Syllabus for 2020 batch', pages: '12', content: ''},
    {thumbnail: 'assets/icon/pdf.svg', title: 'Social Science Syllabus', oneLiner: 'Syllabus for 2020 batch', pages: '12', content: ''},
  ];

  linkHolder: Link[] = [
    {thumbnail: 'assets/images/notice_img_two.png', brief: 'This is an introductory course...', link: 'www.history.comlessons'},
    {thumbnail: 'assets/images/notice_img_two.png', brief: 'This is an introductory course...', link: 'www.history.comlessons'},
    {thumbnail: 'assets/images/notice_img_two.png', brief: 'This is an introductory course...', link: 'www.history.comlessons'},
    {thumbnail: 'assets/images/notice_img_two.png', brief: 'This is an introductory course...', link: 'www.history.comlessons'},
    {thumbnail: 'assets/images/notice_img_two.png', brief: 'This is an introductory course...', link: 'www.history.comlessons'},
    {thumbnail: 'assets/images/notice_img_two.png', brief: 'This is an introductory course...', link: 'www.history.comlessons'},
  ];

  imageHolder: Image[] = [
    {thumbnail: 'assets/images/notice_img_one.png', description: 'A screenshot of lesson', size: '200kb', image: '', title: 'An image of screenshot'},
    {thumbnail: 'assets/images/notice_img_one.png', description: 'A screenshot of lesson', size: '200kb', image: '', title: 'An image of screenshot'},
    {thumbnail: 'assets/images/notice_img_one.png', description: 'A screenshot of lesson', size: '200kb', image: '', title: 'An image of screenshot'},
    {thumbnail: 'assets/images/notice_img_one.png', description: 'A screenshot of lesson', size: '200kb', image: '', title: 'An image of screenshot'},
    {thumbnail: 'assets/images/notice_img_one.png', description: 'A screenshot of lesson', size: '200kb', image: '', title: 'An image of screenshot'},
    {thumbnail: 'assets/images/notice_img_one.png', description: 'A screenshot of lesson', size: '200kb', image: '', title: 'An image of screenshot'},
  ];

  videoHolder: Video[] = [
    {thumbnail: 'assets/icon/video-thumbnail.svg', description: 'Chapter Wise, MCQs and Answers', size: 'Live screenshot', video: ''},
    {thumbnail: 'assets/icon/video-thumbnail.svg', description: 'Chapter Wise, MCQs and Answers', size: 'Live screenshot', video: ''},
    {thumbnail: 'assets/icon/video-thumbnail.svg', description: 'Chapter Wise, MCQs and Answers', size: 'Live screenshot', video: ''},
    {thumbnail: 'assets/icon/video-thumbnail.svg', description: 'Chapter Wise, MCQs and Answers', size: 'Live screenshot', video: ''},
    {thumbnail: 'assets/icon/video-thumbnail.svg', description: 'Chapter Wise, MCQs and Answers', size: 'Live screenshot', video: ''},
    {thumbnail: 'assets/icon/video-thumbnail.svg', description: 'Chapter Wise, MCQs and Answers', size: 'Live screenshot', video: ''},
    {thumbnail: 'assets/icon/video-thumbnail.svg', description: 'Chapter Wise, MCQs and Answers', size: 'Live screenshot', video: ''},
  ];

  constructor() { }

  getSwiperConfig(slides: number, slidesPerViewSmall: number, slidesPerViewMedium: number){
    const config: SwiperOptions = {
      slidesPerView: slides,
      spaceBetween: 50,
      navigation: true,
      pagination: { clickable: true },
      scrollbar: { draggable: true },
      breakpoints: {
        320: {
          slidesPerView: slidesPerViewSmall
        },
        500: {
          slidesPerView: slidesPerViewMedium,
        }
      }
    };
    return config;
  }

  slideNext(swiper: SwiperComponent){
    swiper.swiperRef.slideNext();
  }
  slidePrev(swiper: SwiperComponent){
    swiper.swiperRef.slidePrev();
  }
}
