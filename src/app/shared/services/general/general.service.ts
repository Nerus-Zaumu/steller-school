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
