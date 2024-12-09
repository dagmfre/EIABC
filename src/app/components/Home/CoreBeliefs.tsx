import { Box, Typography } from "@mui/material";
import { Favorite, Group } from "@mui/icons-material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "../../styles/CoreBeliefs.css";

const beliefs = [
  {
    icon: <Favorite />,
    title: "ፍቅርና ርኅራኄ",
    description: "ፍቅር የክርስቲያናዊ በጎነቶች ሁሉ መሰረት እና ትልቁ ትእዛዝ ነው።",
  },
  {
    icon: <i className="fa-solid fa-person-praying"></i>,
    title: "ጸሎት እና ጾም",
    description: "ጾም የነፍስን ቁስል ትፈውሳለች።",
  },
  {
    icon: <Group />,
    title: "ሕብረት እና አንድነት",
    description: "ክርስቲያናዊ አንድነት በአማኞች መካከል ያለውን ሕብረት ያጸናል።",
  },
  {
    icon: <AutoAwesomeIcon />,
    title: "ቅድስና እና በጎነት",
    description: "እንደ ትዕግስት፣ እምነት እና ንጽህና ባሉ በጎ ምግባራት የተቀደሰ ሕይወትን መፈለግ።",
  },
];

const CoreBeliefs = () => {
  return (
    <>
      <div className="core-beliefs">
        <img src="images/lideta-double.png" alt="" />
        <div className="core-beliefs-text">
          <p>መሰረታዊ እምነቶቻችን</p>
          <h1>እግዚአብሔር እንዲህ አድርጎ ከወደደን እኛ ደግሞ እርስ በርሳችን ልንዋደድ ይገባናል</h1>
          <div className="beliefs-cont">
            {beliefs.map((belief, index) => (
              <Box
                className="beliefs-cont"
                key={index}
                display="flex"
                alignItems="center"
                mb={2}
              >
                {belief.icon}
                <Box ml={2} className="beliefs">
                  <Typography variant="h6">{belief.title}</Typography>
                  <Typography variant="h6">{belief.description}</Typography>
                </Box>
              </Box>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreBeliefs;
