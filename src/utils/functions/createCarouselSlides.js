export default function createCarouselSlides(arr, size) {
  let slideArr = [];
  //create slides
  const createGroup = (arr, size) => {
    //base case
    if (arr.length <= size) {
      slideArr.push(arr);
    } else {
      // grabs first items, based on size
      let firstSlide = arr.slice(0, size);
      //put remaining items into new arr
      //gets used in next function execution
      let remainderSlides = arr.slice(size);
      //push current slide size
      slideArr.push(firstSlide);
      //loops until there are no more in arr
      createGroup(remainderSlides, size);
    }
  };
  //first function call
  createGroup(arr, size);
  return slideArr;
}
