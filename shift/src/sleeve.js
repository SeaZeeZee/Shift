export default function (part) {
    let {
      options,
      Point,
      Path,
      points,
      paths,
      Snippet,
      snippets,
      complete,
      sa,
      paperless,
      macro,
      measurements,
  
    } = part.shorthand()
//design pattern here

let sleeveWidth = measurements.biceps + (100 * options.bicepsEase)

let sleeveLength = measurements.shoulderToElbow * options.sleeveBonus




      // Complete?
  if (complete) {
    

    if (sa) {
      
    }
  }

  // Paperless?
  if (paperless) {
    
  }

  return part
}