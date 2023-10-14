import React from 'react'
import MyDocument from './MyDocument'
import QRCode from 'qrcode'
import {PDFViewer, PDFDownloadLink} from '@react-pdf/renderer';
import {Button} from '@mui/material'


const fakeURLs = [
    'https://www.google.com',
    'https://www.yahoo.co.jp',
    'https://www.bing.com',
    'https://www.amazon.co.jp',
    'https://www.rakuten.co.jp'
]

const PDFQR = () => {
    const images = fakeURLs.map((url) => {
        return QRCode.toDataURL(url, {type: "png"})
    })

    return (
        <>
            <PDFDownloadLink
                document={<MyDocument imageSrc={images}/>}
                fileName="QR.pdf"
            >
                <Button variant='contained'>
                    QRコードをダウンロード
                </Button>
            </PDFDownloadLink>

            <PDFViewer>
                <MyDocument imageSrc={images}/>
            </PDFViewer>
        </>
    )
}

export default PDFQR