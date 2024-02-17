import { ReactElement, SVGProps } from 'react';

const flagSize = 24;

export const EnglishFlagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={flagSize}
    height={flagSize}
    viewBox='0 0 512 512'
    {...props}
  >
    <path
      d='M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621V385.38c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.621c0-21.178-17.167-38.345-38.345-38.345z'
      style={{
        fill: '#41479b',
      }}
    />
    <path
      d='M511.469 120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54 107.147V88.276h-88.276v107.147L48.322 88.276h-9.977c-19.017 0-34.792 13.847-37.814 32.007l139.778 91.58H0v88.276h140.309L.531 391.717c3.022 18.159 18.797 32.007 37.814 32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54 107.147h9.977c19.017 0 34.792-13.847 37.814-32.007l-139.778-91.58H512v-88.276H371.691l139.778-91.579z'
      style={{
        fill: '#f5f5f5',
      }}
    />
    <path
      d='M282.483 88.276h-52.966v141.241H0v52.966h229.517v141.241h52.966V282.483H512v-52.966H282.483z'
      style={{
        fill: '#ff4b55',
      }}
    />
    <path
      d='m24.793 421.252 186.583-121.114h-32.428L9.224 410.31a38.393 38.393 0 0 0 15.569 10.942zM346.388 300.138H313.96l180.716 117.305a38.515 38.515 0 0 0 12.287-13.075l-160.575-104.23zM4.049 109.475l157.73 102.387h32.428L15.475 95.842a38.499 38.499 0 0 0-11.426 13.633zM332.566 211.862l170.035-110.375a38.4 38.4 0 0 0-15.699-10.86L300.138 211.862h32.428z'
      style={{
        fill: '#ff4b55',
      }}
    />
  </svg>
);

export const SpanishFlagIcon = (
  props: SVGProps<SVGSVGElement>,
): ReactElement => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={flagSize}
    height={flagSize}
    fill='none'
    viewBox='0 -4 28 28'
    {...props}
  >
    <g clipPath='url(#a)'>
      <rect
        width={28}
        height={20}
        fill='#fff'
        rx={2}
      />
      <mask
        id='b'
        width={28}
        height={20}
        x={0}
        y={0}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'alpha',
        }}
      >
        <rect
          width={28}
          height={20}
          fill='#fff'
          rx={2}
        />
      </mask>
      <g mask='url(#b)'>
        <path
          fill='#DD172C'
          fillRule='evenodd'
          d='M0 5.333h28V0H0v5.333ZM0 20h28v-5.333H0V20Z'
          clipRule='evenodd'
        />
        <path
          fill='#FFD133'
          fillRule='evenodd'
          d='M0 14.667h28V5.333H0v9.334Z'
          clipRule='evenodd'
        />
        <path
          fill='#FFEDB1'
          fillRule='evenodd'
          d='M7.333 9.333h1.334V10H7.333v-.667Z'
          clipRule='evenodd'
        />
        <path
          stroke='#A41517'
          strokeWidth={0.667}
          d='M6.391 9h1.884c.195 0 .349.167.333.361l-.172 2.055a1 1 0 0 1-.996.917h-.213a1 1 0 0 1-.997-.917L6.06 9.361A.333.333 0 0 1 6.391 9Z'
        />
        <path
          fill='#A41517'
          fillRule='evenodd'
          d='M6 10h2.667v.667H8L7.333 12l-.666-1.333H6V10Z'
          clipRule='evenodd'
        />
        <rect
          width={1.333}
          height={4.667}
          x={4}
          y={8}
          fill='#A41517'
          rx={0.667}
        />
        <rect
          width={1.333}
          height={4.667}
          x={9.333}
          y={8}
          fill='#A41517'
          rx={0.667}
        />
        <path
          fill='#A41517'
          d='M6 7.733c0-.589.478-1.066 1.067-1.066H7.6c.59 0 1.067.477 1.067 1.066 0 .148-.12.267-.267.267H6.267A.267.267 0 0 1 6 7.733Z'
        />
      </g>
    </g>
    <defs>
      <clipPath id='a'>
        <rect
          width={28}
          height={20}
          fill='#fff'
          rx={2}
        />
      </clipPath>
    </defs>
  </svg>
);
