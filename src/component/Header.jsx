import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search/Search';


export const Header = () => {
  const { items, totalPrice } = useSelector(state => state.cart)
  const { pathname } = useLocation()



  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <svg fill="none" height="60" viewBox="0 0 124 133" width="124" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M91.2031 91.2616C89.1028 91.5024 88.2017 93.1774 87.1522 94.5774C82.882 100.272 78.5167 101.797 71.6462 99.899C66.3581 98.4367 64.9016 99.1252 62.3432 104.092C61.4362 106.021 60.3567 107.864 59.118 109.599C58.2213 110.749 57.0771 111.682 55.7708 112.329C54.4645 112.976 53.0297 113.32 51.572 113.337C50.1142 113.355 48.671 113.043 47.35 112.426C46.029 111.81 44.8639 110.904 43.9407 109.776C43.6588 109.426 43.3574 109.093 43.0377 108.777C41.3424 107.195 39.6013 107.522 38.9817 109.791C38.4566 111.714 38.4378 113.776 38.2068 115.778C37.8596 118.784 37.5697 121.799 37.1569 124.796C36.9962 125.793 36.6862 126.761 36.2378 127.666C33.9609 132.468 28.3535 133.018 25.5306 128.5C24.147 126.286 23.5295 123.557 22.7675 121.002C22.161 118.967 22.0282 116.792 21.383 114.777C20.5888 112.299 19.4096 111.927 17.0139 112.999C15.6213 113.717 14.1832 114.344 12.709 114.874C7.50486 116.418 2.67415 113.627 1.21117 108.41C0.524642 105.962 0.178799 103.847 2.43988 101.741C3.9278 100.354 4.67142 98.1485 5.68087 96.2714C16.2479 76.5813 27.8883 57.5338 40.32 38.9732C47.0028 28.9969 53.8043 19.0947 60.5908 9.18599C61.8576 7.33579 63.3687 5.65417 64.6551 3.81576C66.2609 1.51858 68.415 0.787409 71.0988 1.16349C76.5615 1.92944 81.4105 4.27332 85.9235 7.24391C103.993 19.1374 115.797 35.4474 120.359 56.7489C121.318 61.2264 122.693 65.6362 122.023 70.3664C121.798 71.9534 122.575 73.6599 122.717 75.327C123.044 78.0232 122.519 80.7543 121.217 83.1374C119.929 85.369 118.209 86.5917 115.43 86.213C112.16 85.768 111.492 86.3213 110.947 89.5859C110.488 92.3504 110.245 95.151 109.831 97.9214C109.642 99.1403 109.356 100.343 108.978 101.516C107.791 105.261 105.737 106.909 102.239 107.02C98.3736 107.144 95.357 105.248 94.1665 101.68C93.6414 100.105 93.6 98.3776 93.2266 96.7453C92.7881 94.8458 93.1071 92.6405 91.2031 91.2616ZM82.0734 53.4015C82.0262 53.2998 82.0085 53.1494 81.9284 53.1035C81.4657 52.8028 80.9773 52.5433 80.4693 52.3277C76.085 50.746 73.5312 47.5752 72.4036 43.139C72.0177 41.6222 71.6678 40.0929 71.2038 38.6004C70.7024 36.6548 70.0375 34.7547 69.2177 32.9204C67.2743 29.1045 63.1791 27.5595 57.8969 28.2151C54.1098 28.6851 53.3229 31.7548 51.6617 34.5481C57.1513 35.2596 59.565 38.5899 60.1524 43.2085C60.5809 46.2267 60.2831 49.3036 59.2846 52.1838C58.286 55.0641 56.6154 57.6646 54.4108 59.7698C49.3307 64.8427 42.3254 65.5011 36.1512 61.8361C35.5021 61.4508 34.8827 61.0144 33.9534 60.4092L9.06097 100.544L9.49553 101.177L26.7132 95.6551C26.7867 94.8891 26.836 94.5603 26.8446 94.2302C26.8577 93.7819 26.8006 93.3284 26.8446 92.884C27.5849 85.1734 30.5022 78.8693 37.8709 75.245C45.382 71.5511 57.0079 72.4378 61.6305 82.252C61.8611 82.6629 62.1186 83.0573 62.4015 83.4334C63.751 82.974 65.0206 82.5664 66.2741 82.1116C67.5979 81.6318 68.9053 81.1074 70.1852 80.6151C66.9284 70.2023 71.7538 59.405 82.0734 53.4015ZM29.8295 126.598L30.7717 126.381C32.3692 123.952 32.3574 121.124 32.6305 118.367C32.9389 115.247 32.9704 112.072 33.59 109.016C34.5167 104.442 38.3812 102.003 42.5627 103.102C44.3683 103.576 46.1899 104.07 47.5019 105.696C48.7023 107.182 50.4744 108.073 52.2629 107.033C53.4753 106.258 54.4327 105.142 55.0152 103.825C56.6491 100.235 59.3358 97.2264 62.7188 95.1976C63.9155 94.3628 65.2849 93.8095 66.7256 93.5778C68.1656 93.3461 69.6404 93.4426 71.0384 93.8594C72.1155 94.1691 73.1702 94.5925 74.2669 94.792C77.1174 95.3105 79.6082 94.8117 81.3226 92.1489C82.0203 91.1303 82.7921 90.1648 83.6329 89.261C86.0574 86.5077 88.9203 84.4895 92.7645 85.6217C96.4512 86.7072 97.7783 89.836 98.3906 93.3225C98.7011 95.0887 98.9242 96.8713 99.2478 98.6355C99.4775 99.8885 99.8746 101.149 101.439 101.199C103.003 101.25 102.962 99.8169 103.312 98.818C103.478 98.2818 103.586 97.7291 103.632 97.1699C103.96 94.3877 104.259 91.6022 104.584 88.8206C105.351 82.277 109.668 79.7993 114.633 80.5508C114.817 80.5784 115.033 80.3946 115.618 80.1471C115.854 78.3494 116.118 76.3509 116.445 73.8614C111.136 75.3211 106.442 76.4211 101.874 77.9012C80.1182 84.9423 58.4325 92.1995 36.6454 99.1409C26.9382 102.234 17.0525 104.768 7.24547 107.549C6.57269 107.74 5.88443 107.877 5.08895 108.066C7.38941 111.352 8.614 111.777 11.6712 110.442C12.6938 109.995 13.62 109.333 14.6334 108.861C15.6101 108.329 16.6538 107.929 17.7366 107.674C21.5473 107.052 24.6831 108.926 26.0155 112.932C26.9646 115.786 27.325 118.83 28.0896 121.752C28.5222 123.404 29.2413 124.984 29.832 126.598H29.8295ZM104.481 69.6352C104.405 68.6343 104.273 67.6387 104.087 66.6528C100.3 51.9667 93.8317 38.6529 83.4846 27.4414C78.2188 21.7365 71.5563 18.1726 64.1289 15.7487L57.9136 24.7058C59.2597 24.7058 59.9331 24.757 60.5966 24.6979C67.4929 24.0822 72.3859 28.5604 74.3556 34.7103C74.9699 36.6261 75.4891 38.5742 76.0062 40.5189C76.9947 44.2331 78.9545 46.9923 82.9129 47.9952C83.9873 48.3201 85.0184 48.7752 85.9832 49.3505C90.1313 51.5938 92.6726 55.0056 92.8991 59.7785C92.9233 62.4656 92.8111 65.1521 92.563 67.8277C92.4678 69.5598 92.3169 71.2892 92.1758 73.23L104.481 69.6352ZM115.878 66.6988C115.786 65.5451 115.761 64.8775 115.675 64.2185C113.018 43.9062 104.294 27.0134 87.46 14.8463C83.9158 12.3048 80.1359 10.1092 76.1716 8.28944C70.94 5.87086 70.3821 6.24818 67.3813 11.2258C67.2914 11.3748 67.3701 11.6262 67.3701 11.8218C67.5618 11.9508 67.7633 12.0638 67.9733 12.1592C68.6054 12.387 69.2545 12.5681 69.8833 12.8044C77.3484 15.6069 83.9191 19.6815 89.259 25.7395C97.9516 35.6356 104.468 47.2473 108.387 59.8224C109.229 62.4622 110.071 65.102 110.963 67.8999L115.878 66.6988ZM56.5663 85.4458C55.0193 80.5941 51.0162 78.3921 45.797 79.1712C38.3679 80.2797 33.4375 85.8035 33.433 93.2739L56.5663 85.4458ZM37.2697 55.719C42.1319 59.5488 46.8831 59.2436 50.0138 55.0811C51.944 52.5676 52.9744 49.4788 52.9398 46.3098C52.9037 42.4991 51.4676 41.0354 47.25 40.5799L37.2697 55.719ZM86.0266 75.2712C86.467 72.1339 86.8844 69.3642 87.2381 66.5859C87.5985 63.7525 88.5699 60.9094 87.3931 58.0431C79.7612 59.5297 74.4284 70.5456 77.7153 78.0272L86.0266 75.2712Z" fill="black" /></g><defs><clipPath id="clip0"><rect fill="white" height="131.268" transform="translate(0.0473633 0.77832)" width="123.392" /></clipPath></defs></svg>
          </Link>
          <Link to="/">
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </Link>
          <Search />
        </div>
        <div className="header__cart">
          {pathname === '/' && (< Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₴ </span>
            <div className="button__delimiter"></div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{items.length}</span>
          </Link>)}
        </div>
      </div >
    </div >
  )
}
export default Header;