/** @jsx jsx */
import { jsx, Box, Image, Text, Heading } from 'theme-ui';

const Service = ({ item }) => {
  return (
    <Box sx={styles.serviceItem}>
      <Box as="figure" sx={styles.figure}>
        <Image src={item?.icon} alt="icon" />
      </Box>
      <Box sx={styles.content}>
        <Heading as="h3">{item?.title}</Heading>
        <Text as="p">{item?.description}</Text>
      </Box>
    </Box>
  );
};

export default Service;

const styles = {
  serviceItem: {
    display: [null, null, null, null, null, 'flex'],
    textAlign: ['center', null, null, null, null, 'left'],
    mb: [4, null, null, null, null, 0],
  },
  figure: {
    minWidth: [88, null, null, null, null, 70, 88],
    // mr: [null, null, null, null, null, 30],
    mb: [2, null, null, null, null, 0],
    textAlign: "-webkit-center",
    img: {
      maxWidth: [42, null, null, 60, 70, '80%'],
    },
  },
  content: {
    h3: {
      color: 'heading',
      fontWeight: 700,
      fontFamily: 'body',
      fontSize: [2, null, null, 17, 3],
      lineHeight: [1.68],
      textAlign: 'center',
      textDecoration: 'underline #C8ADA7',
    },
    p: {
      fontSize: [1, null, null, null, 2],
      lineHeight: [1.88],
      mt: [2],
      textAlign: 'center',
    },
    a: {
      mt: [2, null, null, 3],
    },
  },
};
