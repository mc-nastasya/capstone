import './PrintedBooks.scss';

function PrintedBooks() {
  return (
    <div className='printed-books'>
        <ul className='printed-books__list'>
            <li className='printed-books__item'>Storybook “Bedtime reading” (2020)</li>
            <ul className='printed-books__list'>
                <li className='printed-books__item'>Hedgehog Greg and the rainbow</li>
                <li className='printed-books__item'>A little bear and a moth</li>
                <li className='printed-books__item'>A lullaby for a little spider</li>
            </ul>
            <li className='printed-books__item'>An Owlet who walked the echo (2020)</li>
            <li className='printed-books__item'>
                The Squirrels, The Skipper, 
                The Albatrossor a story about 
                how snowboarding appeared (2020)
            </li>
            <li className='printed-books__item'>Who will hug the granny? (2022)</li>
            <li className='printed-books__item'>Kitten and Sunny (2019)</li>
            <li className='printed-books__item'>A Kingfisher and the Spring (2021)</li>
            <li className='printed-books__item'>Hedgehog and the maple leaf (2019)</li>
            <li className='printed-books__item'>Letty Gwyngyll. Druid Cradle (2021)</li>
            <li className='printed-books__item'>Letty Gwyngyll. Druid Citadel (2022)</li>
            <li className='printed-books__item'>Winged Moggy, Honking and the Star (2022)</li>
        </ul>
    </div>
  )
}

export default PrintedBooks