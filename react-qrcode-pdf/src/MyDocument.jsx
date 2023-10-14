import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    image: {
        // 縦横比を維持したまま、横幅を100%にする
        width: '100%',
        height: '100%',
        // 中央寄せ
        textAlign: 'center',
        // 余白を設定
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        // 文字サイズ
        fontSize: 60
    }
});

const MyDocument = ({ imageSrc }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page} >
                {
                    imageSrc.map((image, index) => {
                        return (
                            <View key={index} style={styles.image}>
                                <Image src={image}></Image>
                            </View >
                        )
                    })
                }
            </Page>
        </Document>
    )
}

export default MyDocument;