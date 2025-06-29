

const getCroppedImageUrl = (url: string) => {
  if(!url) return '';
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}


// or 

// const getCroppedImageUrl = (url: string): string => {
//   // Split the URL at 'media/'
//   const [before, after] = url.split('media/');
  
//   // Rebuild the URL with 'crop/600/400/' inserted
//   return `${before}media/crop/600/400/${after}`;
// };


export default getCroppedImageUrl;