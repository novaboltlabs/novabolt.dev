import React from 'react';
import {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import Link from '@docusaurus/core/lib/client/exports/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LayoutHead from '@theme/LayoutHead';
import Footer from '@theme/Footer';
import 'tailwindcss/tailwind.css';
import {LightningBoltIcon, ScaleIcon, PuzzleIcon, CurrencyDollarIcon, CheckIcon} from '@heroicons/react/outline';
import {DocumentTextIcon, PlayIcon, SparklesIcon} from '@heroicons/react/solid';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [open, setOpen] = useState(false)
  return (
      <>
        <LayoutHead title={siteConfig.tagline} />

        <main className="tw-bg-white tw-mb-24 sm:tw-mb-12">
          <div className="tw-pt-8 tw-overflow-hidden sm:tw-pt-12 lg:tw-relative lg:tw-py-48">
            <div className="tw-mx-auto tw-max-w-md tw-px-4 sm:tw-max-w-3xl sm:tw-px-6 lg:tw-px-8 lg:tw-max-w-7xl lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-24">
              <div>
                <div>
                  <img className="tw-h-11 tw-w-auto" src={require('@site/static/img/mark.png').default} alt={siteConfig.title}/>
                </div>
                <div className="tw-mt-20">
                  <div>
                    <a href="https://github.com/novaboltlabs/novabolt/releases" target="_blank" className="tw-inline-flex tw-space-x-4 tw-no-underline">
                      <span className="tw-rounded tw-bg-indigo-50 tw-px-2.5 tw-py-1 tw-text-xs tw-font-semibold tw-text-indigo-500 tw-tracking-wide tw-uppercase">
                        Có gì mới
                      </span>
                      <span className="tw-inline-flex tw-items-center tw-text-sm tw-font-medium tw-text-indigo-500 tw-space-x-1">
                        <span>Chính thức ra mắt phiên bản 0.1.0</span>
                        <svg className="tw-h-5 tw-w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="tw-mt-6 sm:tw-max-w-xl">
                    <h1 className="tw-text-4xl tw-font-extrabold tw-text-gray-900 tw-tracking-tight sm:tw-text-5xl">
                      Hệ thống quản lý dịch vụ <span className="tw-text-indigo-600">mua hàng hộ</span> toàn diện
                    </h1>
                    <p className="tw-mt-6 tw-text-xl tw-text-gray-500">
                      Cung cấp đầy đủ các tính năng thiết yếu hỗ trợ triển khai hệ thống quản lý dịch vụ mua hàng hộ một cách đơn giản, nhanh chóng và tiết kiệm chi phí.
                    </p>
                  </div>
                  <div className="tw-mt-6 tw-inline-flex tw-space-x-2">
                    <object data="https://img.shields.io/github/license/novaboltlabs/novabolt?style=social&link=https://github.com/novaboltlabs/novabolt/blob/master/LICENSE" height="20" aria-label="Giấy phép"/>
                    <object data="https://img.shields.io/github/v/release/novaboltlabs/novabolt?include_prereleases&style=social" height="20" aria-label="Phiên bản"/>
                    <object data="https://img.shields.io/github/stars/novaboltlabs/novabolt?style=social" height="20" aria-label="Lượt theo dõi"/>
                  </div>
                  <div className="tw-mt-6 sm:tw-mt-8 sm:tw-flex sm:tw-justify-center lg:tw-justify-start">
                    <div className="tw-rounded-md tw-shadow">
                      <Link to="docs/gioi-thieu" className="tw-w-full tw-flex tw-items-center tw-justify-center tw-px-8 tw-py-3 tw-border tw-border-transparent hover:tw-no-underline tw-text-base tw-font-medium tw-rounded-md tw-text-white tw-bg-indigo-600 hover:tw-bg-indigo-700 md:tw-py-4 md:tw-text-lg md:tw-px-10">
                        <DocumentTextIcon className="tw--ml-1 tw-mr-2 tw-h-5 tw-w-5" />
                        Tài liệu
                      </Link>
                    </div>
                    <div className="tw-mt-3 sm:tw-mt-0 sm:tw-ml-3">
                      <button onClick={() => setOpen(true)} className="tw-w-full tw-flex tw-items-center tw-justify-center tw-px-8 tw-py-3 tw-cursor-pointer tw-border-0 tw-text-base tw-font-medium tw-rounded-md tw-text-indigo-700 tw-bg-indigo-100 hover:tw-bg-indigo-200 md:tw-py-4 md:tw-text-lg md:tw-px-10">
                        <PlayIcon className="tw--ml-1 tw-mr-2 tw-h-5 tw-w-5" />
                        Trải nghiệm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:tw-mx-auto sm:tw-max-w-3xl sm:tw-px-6">
              <div className="tw-py-12 sm:tw-relative sm:tw-mt-12 sm:tw-py-16 lg:tw-absolute lg:tw-inset-y-0 lg:tw-right-0 lg:tw-w-1/2">
                <div className="tw-hidden sm:tw-block">
                  <div className="tw-absolute tw-inset-y-0 tw-left-1/2 tw-w-screen tw-bg-gray-50 tw-rounded-l-3xl lg:tw-left-80 lg:tw-right-0 lg:tw-w-full"/>
                  <svg className="tw-absolute tw-top-8 tw-right-1/2 tw--mr-3 lg:tw-m-0 lg:tw-left-0" width="404" height="392" fill="none" viewBox="0 0 404 392">
                    <defs>
                      <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" className="tw-text-gray-200" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                  </svg>
                </div>
                <div className="tw-relative tw-pl-4 tw--mr-40 sm:tw-mx-auto sm:tw-max-w-3xl sm:tw-px-0 lg:tw-max-w-none lg:tw-h-full lg:tw-pl-12">
                  <img className="tw-w-full tw-rounded-md tw-shadow-xl tw-ring-1 tw-ring-black tw-ring-opacity-5 lg:tw-h-full lg:tw-w-auto lg:tw-max-w-none" src={require('@site/static/img/admin_dashboard.png').default} alt="Trang quản trị Novabolt" />
                </div>
              </div>
            </div>
          </div>

          <div className="tw-mt-20 tw-py-12">
            <div className="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8">
              <div className="lg:tw-text-center">
                <h2 className="tw-text-base tw-text-indigo-600 tw-font-semibold tw-tracking-wide tw-uppercase">
                  Mọi thứ bạn cần
                </h2>
                <p className="tw-mt-2 tw-text-3xl tw-leading-8 tw-font-extrabold tw-tracking-tight tw-text-gray-900 sm:tw-text-4xl">
                  Tất cả trong cùng một ứng dụng
                </p>
                <p className="tw-mt-4 tw-max-w-3xl tw-text-xl tw-text-gray-500 lg:tw-mx-auto">
                  {siteConfig.title} cung cấp đầy đủ các tính năng thiết yếu hỗ trợ triển khai hệ thống quản lý dịch
                  vụ mua hàng hộ một cách đơn giản, nhanh chóng và tiết kiệm chi phí.
                </p>
              </div>

              <div className="tw-mt-10">
                <dl className="tw-space-y-10 md:tw-space-y-0 md:tw-grid md:tw-grid-cols-2 md:tw-gap-x-8 md:tw-gap-y-10">
                  <div className="tw-relative">
                    <dt>
                      <div className="tw-absolute tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-md tw-bg-indigo-500 tw-text-white">
                        <LightningBoltIcon className="tw-h-6 tw-w-6" />
                      </div>
                      <p className="tw-ml-16 tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900 tw-m-0">Quản trị linh hoạt</p>
                    </dt>
                    <dd className="tw-mt-2 tw-ml-16 tw-text-base tw-text-gray-500">
                      {siteConfig.title} được thiết kế để hoạt động độc lập, cho phép tự xây dựng Landing Page của
                      riêng mình hoặc tích hợp với bất kỳ CMS nào bạn muốn như Wordpress, Drupal hoặc Joomla.
                    </dd>
                  </div>

                  <div className="tw-relative">
                    <dt>
                      <div className="tw-absolute tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-md tw-bg-indigo-500 tw-text-white">
                        <PuzzleIcon className="tw-h-6 tw-w-6" />
                      </div>
                      <p className="tw-ml-16 tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900 tw-m-0">Công cụ tiện lợi</p>
                    </dt>
                    <dd className="tw-mt-2 tw-ml-16 tw-text-base tw-text-gray-500">
                      Hoạt động trên các nền tảng thương mại điện tử lớn nhỏ bao gồm Alibaba, Ebay, Taobao, Tmall,
                      1688... hỗ trợ phân tích và bóc tách chính xác thông tin sản phẩm khách hàng cần mua.
                    </dd>
                  </div>

                  <div className="tw-relative">
                    <dt>
                      <div className="tw-absolute tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-md tw-bg-indigo-500 tw-text-white">
                        <ScaleIcon className="tw-h-6 tw-w-6" />
                      </div>
                      <p className="tw-ml-16 tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900 tw-m-0">Đa dạng tiền tệ</p>
                    </dt>
                    <dd className="tw-mt-2 tw-ml-16 tw-text-base tw-text-gray-500">
                      Tính năng tự động quy đổi tiền tệ theo tỉ giá được thiết lập trên từng đơn hàng giúp khách hàng luôn
                      nắm bắt được chính xác số tiền chi tiêu.
                    </dd>
                  </div>

                  <div className="tw-relative">
                    <dt>
                      <div className="tw-absolute tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-md tw-bg-indigo-500 tw-text-white">
                        <CurrencyDollarIcon className="tw-h-6 tw-w-6" />
                      </div>
                      <p className="tw-ml-16 tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900 tw-m-0">Ví điện tử thông minh</p>
                    </dt>
                    <dd className="tw-mt-2 tw-ml-16 tw-text-base tw-text-gray-500">
                      Được tích hợp sẵn với các cổng thanh toán thông dụng giúp tự động hóa quy trình nạp tiền và thanh
                      toán công nợ đơn giản hơn bao giờ hết.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="tw-mt-32">
            <div className="tw-mx-auto tw-max-w-md tw-px-4 sm:tw-max-w-3xl sm:tw-px-6 lg:tw-px-8 lg:tw-max-w-7xl">
              <div className="lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-24 lg:tw-items-center">
                <div>
                  <h2 className="tw-text-3xl tw-font-extrabold tw-text-gray-900 tw-tracking-tight sm:tw-text-4xl">
                    Dựa trên các nền tảng framework và thư viện lập trình phổ biến
                  </h2>
                  <p className="tw-mt-6 tw-max-w-3xl tw-text-lg tw-leading-7 tw-text-gray-500">
                    Giúp lập trình viên nhanh chóng tiếp cận và nắm bắt được cấu trúc mã nguồn, hỗ trợ thúc đẩy quy
                    trình triển khai và mở rộng hệ thống một cách nhanh chóng và đơn giản.
                  </p>
                </div>
                <div className="tw-mt-12 tw-grid tw-grid-cols-2 tw-gap-0.5 md:tw-grid-cols-3 lg:tw-mt-0 lg:tw-grid-cols-2">
                  <div className="tw-col-span-1 tw-flex tw-justify-center tw-py-8 tw-px-8 tw-bg-gray-50">
                    <img className="tw-max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel"/>
                  </div>
                  <div className="tw-col-span-1 tw-flex tw-justify-center tw-py-8 tw-px-8 tw-bg-gray-50">
                    <svg className="tw-max-h-12 tw-text-gray-400 tw-fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275.3 50.5">
                      <path d="M231.2 16.1h-17.8l17.2 17.2-17.2 17.2h17.8l17.2-17.2z"/>
                      <path d="M258.1 16.1h-17.8l17.2 17.2-17.2 17.2h17.8l17.2-17.2z"/>
                      <path d="M6 15.3h10.3l-6 34.2H0l6-34.2zm.6-9.1C7.2 2.9 10.3 0 13.7 0s5.7 2.8 5.2 6.2c-.5 3.4-3.7 6.2-7.2 6.2s-5.6-3-5.1-6.2zM54.3 28.5l-3.7 21H40.4L43.8 30c.8-4.4-1.6-6.2-4.9-6.2-3.4 0-6.5 2-7.5 6.6L28 49.5H17.8l6-34.2h10.3l-.5 3.2c2.3-2.6 6.2-4.2 10.1-4.2 6.9.1 12.2 5.1 10.6 14.2zM94.5 32.4c-.1.8-.5 2.7-1.1 4.1H68.9c.6 3.8 3.8 4.8 7 4.8 2.9 0 5.2-.8 7.2-2.7l7.2 5.9c-4 4-8.7 6-15 6-11.8 0-18-8.5-16.3-18.7a20.7 20.7 0 0 1 20.5-17.4c9.8 0 16.9 7.6 15 18zm-9.7-3.7c-.3-3.8-3-5.3-6.2-5.3a8.9 8.9 0 0 0-8.3 5.3h14.5zM123.9 14.6l-2 11.6c-4-.6-10.5.8-11.7 7.8l.1-.4-2.8 15.9H97.3l6-34.2h10.3l-1.1 6.2c2.1-4.7 6.6-6.9 11.4-6.9zM137.8 37.3c-.5 3.1 2 3.3 6.6 2.9l-1.6 9.3c-12.3 1.4-16.9-2.7-15.2-12.2l2.1-12.1h-5.5l1.8-9.9h5.4l1.2-6.5 10.8-3.1-1.7 9.6h7.1l-1.8 9.9h-7l-2.2 12.1zM155.3 15.3h10.3l-6 34.2h-10.3l6-34.2zm.6-9.1c.5-3.3 3.7-6.2 7.1-6.2s5.7 2.8 5.2 6.2c-.5 3.4-3.7 6.2-7.2 6.2s-5.7-3-5.1-6.2zM208.1 15.3l-6 34.2h-10.3l.4-2.3a15.5 15.5 0 0 1-10.3 3.3c-11.1 0-15.3-9.6-13.5-18.9 1.6-8.8 8.6-17.2 19.2-17.2 4.5 0 7.7 1.8 9.6 4.6l.6-3.6h10.3zm-13.2 17.2c.9-5.2-1.9-8.4-6.6-8.4a9.5 9.5 0 0 0-9.5 8.3c-.9 5.1 1.8 8.3 6.6 8.3 4.6.1 8.6-3.1 9.5-8.2z"/>
                    </svg>
                  </div>
                  <div className="tw-col-span-1 tw-flex tw-justify-center tw-py-8 tw-px-8 tw-bg-gray-50">
                    <svg className="tw-max-h-12 tw-text-gray-400 tw-fill-current" viewBox="0 0 277 95" xmlns="http://www.w3.org/2000/svg">
                      <path d="M128.245 18.0003C127.529 18.0003 126.816 18.2054 126.197 18.6147C125.578 19.024 125.01 19.7298 125.01 20.6359C125.01 20.755 124.94 21.0226 125.173 21.4891L125.112 21.3412L137.558 61.7205C137.781 62.478 138.316 63.0569 138.916 63.3891C139.516 63.7212 140.176 63.8479 140.816 63.8479C142.176 63.8479 143.669 63.1989 144.126 61.7357V61.7318L156.561 21.2011V21.0532C156.561 21.2576 156.622 21.1395 156.622 20.6967C156.622 19.7752 156.033 19.0976 155.404 18.6716C154.776 18.2457 154.035 18.0004 153.265 18.0004C152.316 18.0004 151.224 18.5779 150.857 19.6766L150.85 19.688L140.812 53.1882L130.736 19.7482C130.587 19.1507 130.184 18.6501 129.716 18.3716C129.248 18.0932 128.737 18 128.245 18L128.245 18.0003ZM227.373 20.0823C225.391 20.0823 223.721 21.6001 223.721 23.4991C223.721 25.3981 225.365 26.9689 227.373 26.9689C229.342 26.9689 230.907 25.3687 230.907 23.4991C230.907 21.6295 229.315 20.0823 227.373 20.0823ZM198.192 33.0098C191.419 33.0098 185.841 38.4298 185.841 44.9438V51.618C185.841 55.2665 187.295 58.3934 189.762 60.5525C192.23 62.7113 195.674 63.9048 199.622 63.9048C202.538 63.9048 204.915 63.2519 206.615 62.3652C207.465 61.9219 208.147 61.4245 208.651 60.8825C209.155 60.3404 209.527 59.7471 209.527 59.0054C209.527 58.3243 209.265 57.7342 208.841 57.2041C208.417 56.674 207.749 56.1878 206.888 56.1878C206.266 56.1878 205.789 56.4495 205.375 56.7035C204.961 56.9575 204.572 57.2382 204.104 57.5074C203.169 58.046 201.929 58.5692 199.74 58.5692C197.302 58.5692 195.27 57.8741 193.869 56.7073C192.469 55.5405 191.655 53.9205 191.655 51.7964V50.5602H204.15C205.483 50.5602 206.964 50.5621 208.246 49.7448C209.527 48.9267 210.305 47.3008 210.305 44.8264C210.305 37.9741 204.587 33.01 198.192 33.01L198.192 33.0098ZM245.152 33.0098C241.552 33.0098 238.904 34.1747 237.203 35.9261C235.503 37.6774 234.769 39.9557 234.769 42.0846C234.769 44.7978 235.865 46.7423 237.435 47.989C239.004 49.2357 240.957 49.8631 242.816 50.4236C244.674 50.9841 246.453 51.4816 247.647 52.2173C248.841 52.953 249.482 53.7489 249.482 55.4293C249.482 56.3312 249.211 57.0492 248.477 57.6363C247.744 58.2234 246.441 58.6867 244.317 58.6867C241.806 58.6867 240.402 58.0671 239.38 57.4353C238.869 57.1193 238.457 56.7915 238.034 56.4986C237.61 56.2057 237.13 55.8881 236.456 55.8881C235.646 55.8881 235.048 56.3873 234.685 56.9044C234.322 57.4214 234.113 58.0088 234.113 58.645C234.113 59.4316 234.495 60.1231 235.038 60.7231C235.58 61.323 236.314 61.8569 237.215 62.3234C239.015 63.2563 241.494 63.9047 244.439 63.9047C247.636 63.9047 250.265 63.1244 252.125 61.6105C253.986 60.0966 255 57.846 255 55.251C255 52.32 253.935 50.2124 252.364 48.8195C250.794 47.4267 248.812 46.7086 246.926 46.1308C245.041 45.5529 243.226 45.1032 242.012 44.4698C240.797 43.8364 240.226 43.2522 240.226 41.9063C240.226 41.1783 240.517 40.2626 241.257 39.5401C241.998 38.8175 243.205 38.2318 245.212 38.2318C246.816 38.2318 248.009 38.6001 248.963 38.9902C249.44 39.1853 249.855 39.3891 250.248 39.559C250.642 39.7289 251.005 39.8966 251.526 39.8966C252.468 39.8966 253.114 39.2753 253.498 38.6982C253.883 38.1211 254.105 37.552 254.105 36.9007C254.105 36.0848 253.597 35.5066 253.036 35.0729C252.474 34.6392 251.77 34.2949 250.954 33.9959C249.322 33.398 247.24 33.01 245.152 33.01L245.152 33.0098ZM159.999 33.3701C158.425 33.3701 157.064 34.3575 157.064 35.8274V51.7356C157.064 58.1891 162.551 63.9047 169.355 63.9047C176.044 63.9047 181.645 58.2563 181.645 51.7356V35.7707C181.645 35.0349 181.24 34.3968 180.709 33.9921C180.177 33.5875 179.501 33.3702 178.767 33.3702C178.033 33.3702 177.354 33.5846 176.81 33.9808C176.267 34.3769 175.832 35.0101 175.832 35.7707V51.7356C175.832 55.1184 172.884 58.3908 169.355 58.3908C165.767 58.3908 162.878 55.0602 162.878 51.7356V35.8274C162.878 35.0654 162.462 34.4779 161.945 34.0602C161.428 33.6424 160.754 33.37 160 33.37L159.999 33.3701ZM227.375 33.3701C226.638 33.3701 225.956 33.5596 225.414 33.9692C224.872 34.3789 224.5 35.053 224.5 35.7705V65.0808C224.5 67.2802 224.346 69.1252 223.863 70.242C223.38 71.3587 222.81 71.8536 221.182 71.8536C219.743 71.8536 218.542 73.1105 218.542 74.6144C218.542 75.2394 218.744 75.9255 219.255 76.4611C219.767 76.9968 220.56 77.3106 221.478 77.3106C224.573 77.3106 226.941 75.938 228.353 73.708C229.764 71.4781 230.313 68.495 230.313 65.0807V35.7704C230.313 35.0067 229.877 34.3422 229.324 33.9502C228.77 33.5582 228.09 33.37 227.374 33.37L227.375 33.3701ZM198.132 38.1711C201.999 38.1711 204.609 41.4079 204.609 44.7049C204.609 45.0641 204.571 45.2994 204.533 45.4065C204.496 45.5134 204.5 45.4997 204.446 45.5354C204.339 45.6068 203.742 45.7591 202.599 45.7591H191.655V44.466C191.655 41.0154 194.538 38.1709 198.132 38.1709L198.132 38.1711ZM216.6 56.3659C214.488 56.3659 212.888 58.1135 212.888 60.1353C212.888 62.0775 214.464 63.8479 216.6 63.8479C218.623 63.8479 220.252 62.1314 220.252 60.1353C220.252 58.0636 218.596 56.3659 216.6 56.3659Z"/>
                      <path d="M22.4039 0.39386L42.1329 0.401321L55.0294 21.808L67.8805 0.403037L87.5924 0.397805L55.1281 56.7108L22.4039 0.39386Z" fill="#425563"/>
                      <path d="M0.887085 0.544566L22.3864 0.397812L55.1089 56.7133L87.575 0.401242L109.112 0.423801L55.1055 93.1079L0.887085 0.544566Z"/>
                    </svg>
                  </div>
                  <div className="tw-col-span-1 tw-flex tw-justify-center tw-py-8 tw-px-8 tw-bg-gray-50">
                    <svg className="tw-max-h-12 tw-text-gray-400 tw-fill-current" viewBox="0 0 248 31">
                      <path d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"/>
                      <path d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tw-relative tw-mt-24 sm:tw-mt-32 sm:tw-py-16">
            <div aria-hidden="true" className="tw-hidden sm:tw-block">
              <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-w-1/2 tw-bg-gray-50 tw-rounded-r-3xl"/>
              <svg className="tw-absolute tw-top-8 tw-left-1/2 tw--ml-3" width="404" height="392" fill="none" viewBox="0 0 404 392">
                <defs>
                  <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="tw-text-gray-200" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"/>
              </svg>
            </div>
            <div className="tw-mx-auto tw-max-w-md tw-px-4 sm:tw-max-w-3xl sm:tw-px-6 lg:tw-max-w-7xl lg:tw-px-8">
              <div className="tw-relative tw-rounded-2xl tw-px-6 tw-py-10 tw-bg-indigo-500 tw-overflow-hidden tw-shadow-xl sm:tw-px-12 sm:tw-py-20">
                <div aria-hidden="true" className="tw-absolute tw-inset-0 tw--mt-72 sm:tw--mt-32 md:tw-mt-0">
                  <svg className="tw-absolute tw-inset-0 tw-h-full tw-w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                    <path className="tw-text-indigo-400 tw-text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"/>
                    <path className="tw-text-indigo-600 tw-text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"/>
                  </svg>
                </div>
                <div className="tw-relative">
                  <div className="sm:tw-text-center">
                    <h2 className="tw-text-3xl tw-font-extrabold tw-text-white tw-tracking-tight sm:tw-text-4xl">
                      Đăng ký nhận bản tin.
                    </h2>
                    <p className="tw-mt-6 tw-mx-auto tw-max-w-2xl tw-text-lg tw-text-indigo-100">
                      {siteConfig.title} đang trong trạng thái phát triển tích cực, hãy để lại email và chúng tôi sẽ gửi
                      đến bạn thông tin cập nhật về các phiên bản mới thường xuyên.
                    </p>
                  </div>
                  <form action="https://dev.us1.list-manage.com/subscribe/post?u=f0f8efcef0fe03b9e12324c6a&id=715f7f1c77" method="post" className="tw-mt-12 sm:tw-mx-auto sm:tw-max-w-lg sm:tw-flex">
                    <div className="tw-min-w-0 tw-flex-1">
                      <label htmlFor="cta_email" className="tw-sr-only">Địa chỉ Email</label>
                      <input id="cta_email" type="email" name="MERGE0" className="tw-block tw-w-full tw-border tw-border-transparent tw-rounded-md tw-px-5 tw-py-3 tw-text-base tw-text-gray-900 tw-placeholder-gray-500 tw-shadow-sm focus:tw-outline-none focus:tw-border-transparent focus:tw-ring-2 focus:tw-ring-white focus:tw-ring-offset-2 focus:tw-ring-offset-indigo-500" placeholder="Email của bạn"/>
                    </div>
                    <div className="tw-mt-4 sm:tw-mt-0 sm:tw-ml-3">
                      <button type="submit" className="tw-block tw-w-full tw-rounded-md tw-border tw-border-transparent tw-cursor-pointer tw-px-5 tw-py-3 tw-bg-gray-900 tw-text-base tw-font-medium tw-text-white tw-shadow hover:tw-bg-black focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white focus:tw-ring-offset-2 focus:tw-ring-offset-indigo-500 sm:tw-px-10">
                        Báo cho tôi
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />

        <Transition.Root appear show={open} as={Fragment}>
          <Dialog as="div" static className="tw-fixed tw-z-10 tw-inset-0 tw-overflow-y-auto" open={open} onClose={setOpen}>
            <div className="tw-flex tw-items-end tw-justify-center tw-min-h-screen tw-pt-4 tw-px-4 tw-pb-20 tw-text-center sm:tw-block sm:tw-p-0">
              <Transition.Child
                  as={Fragment}
                  enter="tw-ease-out tw-duration-300"
                  enterFrom="tw-opacity-0"
                  enterTo="tw-opacity-100"
                  leave="tw-ease-in tw-duration-200"
                  leaveFrom="tw-opacity-100"
                  leaveTo="tw-opacity-0"
              >
                <Dialog.Overlay className="tw-fixed tw-inset-0 tw-bg-gray-500 tw-bg-opacity-75 tw-transition-opacity" />
              </Transition.Child>

              <span className="tw-hidden sm:tw-inline-block sm:tw-align-middle sm:tw-h-screen" aria-hidden="true">
                &#8203;
              </span>

              <Transition.Child
                  as={Fragment}
                  enter="tw-ease-out tw-duration-300"
                  enterFrom="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95"
                  enterTo="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100"
                  leave="tw-ease-in tw-duration-200"
                  leaveFrom="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100"
                  leaveTo="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95"
              >
                <div className="tw-inline-block tw-align-bottom tw-bg-white tw-rounded-lg tw-px-4 tw-pt-5 tw-pb-4 tw-text-left tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all sm:tw-my-8 sm:tw-align-middle sm:tw-max-w-lg sm:tw-w-full sm:tw-p-6">
                  <div>
                    <div className="tw-mx-auto tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-full tw-bg-indigo-100">
                      <SparklesIcon className="tw-h-6 tw-w-6 tw-text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="tw-mt-3 tw-text-center sm:tw-mt-5">
                      <Dialog.Title as="h3" className="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900">
                        Trải nghiệm phiên bản Demo
                      </Dialog.Title>
                      <div className="tw-mt-2">
                        <p className="tw-text-sm tw-text-gray-500">
                          Để giúp bạn có cái nhìn sâu hơn về cách thức hoạt động của Novabolt, chúng tôi đã thiết lập một phiên bản demo để bạn có thể dùng thử và trải nghiệm thực tế về hệ thống này.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tw-mt-5 sm:tw-mt-6 sm:tw-grid sm:tw-grid-cols-2 sm:tw-gap-3 sm:tw-grid-flow-row-dense">
                    <Link
                        to="https://demo.novabolt.dev/user"
                        target="_blank"
                        className="tw-no-underline tw-w-full tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-indigo-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500 sm:tw-col-start-1 sm:tw-text-sm"
                    >
                      Trang Khách hàng
                    </Link>
                    <Link
                        to="https://demo.novabolt.dev/admin"
                        target="_blank"
                        className="tw-mt-3 tw-no-underline tw-w-full tw-inline-flex tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-shadow-sm tw-px-4 tw-py-2 tw-bg-purple-600 tw-text-base tw-font-medium tw-text-white hover:tw-bg-purple-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-purple-500 sm:tw-mt-0 sm:tw-col-start-2 sm:tw-text-sm"
                    >
                      Trang Quản trị
                    </Link>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </>
  )
}
