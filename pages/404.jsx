import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";




export default function Custom404() {
    return( 
    <>
        <Box
            styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage:
            "url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
        }}
        />

        <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "200px",
          padding: "16px",
          backgroundColor: appConfig.theme.colors.neutrals[800],
          border: "1px solid",
          borderColor: appConfig.theme.colors.neutrals[999],
          borderRadius: "10px",
          flex: 1,
          minHeight: "240px",
          height: "100%",
          position: "absolute"
        }}
      >
        <Image
          styleSheet={{
            borderRadius: "50%",
            marginBottom: "16px",
          }}
          src={`https://github.com/{charHandler(username)}.png`}
        />
      </Box>
    </>
    )
}