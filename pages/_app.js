
import Head from 'next/head';
import '../styles/index.scss';

if (process.browser) {
    import('aegis-web-sdk').then(res => {
        const Aegis = res.default;
        // only report prod
        new Aegis({
            id: 'vqgYyi4qlPx29LD5dp', // 上报 id
            uin: 'xxx', // 用户唯一 ID（可选）
            reportApiSpeed: true, // 接口测速
            reportAssetSpeed: true, // 静态资源测速
            spa: true, // spa 应用页面跳转的时候开启 pv 计算
        });
        // all env report
        new Aegis({
            id: 'Jjm8eslJWoGP3Q9DXW', // 上报 id
            uin: 'xxx', // 用户唯一 ID（可选）
            reportApiSpeed: true, // 接口测速
            reportAssetSpeed: true, // 静态资源测速
            spa: true, // spa 应用页面跳转的时候开启 pv 计算
        });
    })
}

export default function MyApp({ Component, pageProps }) {
    return ( <>
        <Head>
            <title>Elwin Sun&apos;s Personal Website</title>
        </Head>
        <Component {...pageProps} />
    </>
  )
  }