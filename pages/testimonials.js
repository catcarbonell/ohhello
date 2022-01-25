// import { Carousel } from 'react-responsive-carousel';

const Testimonials = () => {
  return(
    <div className="flex flex-col mb-4">
      <h2 className="text-center">Testimonials</h2>
      {/* <Carousel showThumbs={false} emulateTouch={true}> */}
    
        <div className="flex justify-center items-center">
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">++ Cat would be an amazing addition to any team and she would make one hell of a developer advocate as well.</p>&mdash; kurt kemple (@theworstdev) <a href="https://twitter.com/theworstdev/status/1329908475208609795?ref_src=twsrc%5Etfw">November 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        <div className="flex justify-center items-center">
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">If I was a hiring manager I would make room for Cat on my team. I LOVE passionate people and you should too. ❤️ <a href="https://t.co/Ckb04aml0F">https://t.co/Ckb04aml0F</a></p>&mdash; kim  (@kaydacode) <a href="https://twitter.com/kaydacode/status/1331378718644768769?ref_src=twsrc%5Etfw">November 24, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      
        <div className="flex justify-center items-center">
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">You should hire Cat! She&#39;s amazing, driven and puts in the work to solve problems. Plus she&#39;s an amazing artist and a wonderful person.</p>&mdash; Marwynn (they/she/he) (@code4QueerNCute) <a href="https://twitter.com/code4QueerNCute/status/1314661381149392896?ref_src=twsrc%5Etfw">October 9, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      {/* </Carousel> */}
    </div>   
  )
}

export default Testimonials