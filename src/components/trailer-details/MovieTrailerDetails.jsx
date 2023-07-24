import React from 'react';
import './MovieTrailerDetails.css';

const MovieTrailerDetails = (props) => {
    const { movie } = props

    const movieGenre = movie.EventGenre.split('|')
  return (
    <div className='container trailer-container-details'>
        <div className='row'>
            <div className='col-md-4'>
                <h1>{movie.EventTitle}</h1>
                <p className='movie-language-name'>{movie.EventLanguage}</p>
                <div className='genre-pills'>
                    {movieGenre.map((genre, index) => {
                        return (
                            <span key={index} className='genre-pill'>{genre}</span>
                        )
                    })}
                </div>
                <div className='rating-releaseDate-container'>
                    <div className='likes-rating-container'>
                        <div className='likes-container'>
                            <div className='likes-main-wrapper'>
                                <div className='likes-image-wrapper'>
                                    <img src='likeIcon.svg'/>
                                </div>
                                <div className='likes-text-wrapper'>
                                    <span>{movie.ratings.wtsPerc} %</span>
                                    <span>{movie.ratings.wtsCount} votes</span>
                                </div>
                            </div>
                            <div className='release-date-container likes-main-wrapper'>
                                <div className='likes-image-wrapper'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M13 2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0
                                        2-2V4a2 2 0 0 0-2-2zM3 1a1 1 0 0 0-1 1v10a1 1 0 0
                                        0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0
                                        0-1-1H3z"/>
                                        <path fillRule="evenodd" d="M8 5a1 1 0 0 0-1 1v5a1 1 0 1
                                        0 2 0V6a1 1 0 0 0-1-1z"/>
                                        <path
                                        d="M2.5 3h11v1h-11z"/>
                                    </svg>
                                </div>
                                <div className='likes-text-wrapper'>
                                    <span>{movie.DispReleaseDate.split(',')[0]}</span>
                                    <span>{movie.DispReleaseDate.split(',')[1]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='movie-watch-rating-container'>
                    <div className='watch-rating-container'>
                        <div className='watching-rating-text'>
                            <div className='watching-image'>
                               <svg className='like-svg' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 1460 1530">
<path id="ThumbsUp" fill="#49ba8e" stroke="none" stroke-width="0" transform="matrix(1,0,0,1,-9.17733,-10.9093)" d="M9.17733 859.815C9.17733 827.025 35.7587 800.444 68.548 800.444L254.272 800.444C287.061 800.444 313.643 827.025 313.643 859.815L313.643 1438.92C313.643 1471.71 287.061 1498.29 254.272 1498.29L68.548 1498.29C35.7587 1498.29 9.17733 1471.71 9.17733 1438.92ZM876.383 11.332C965.833 4.01467 1044.83 79.1853 1054.95 166.092C1073.2 259.504 1042.85 353.503 996.215 433.832C971.38 489.036 934.079 547.792 947.528 610.672C994.34 623.619 1052.67 609.076 1103.82 613.941C1187.46 615.889 1273.14 610.312 1354.95 630.228C1409.91 656.02 1445.93 715.133 1460.29 772.508C1456.79 825.152 1375.78 868.34 1430.27 921.868C1477.65 968.421 1451.91 1025.17 1407.78 1062.28C1367.11 1117.01 1458.17 1174.99 1416.25 1231.12C1385.82 1273.54 1325.56 1305.07 1341.08 1366.47C1348.18 1428.16 1287.72 1468.02 1243.89 1499.51C1166.71 1538.04 1076.33 1528.01 992.635 1530C852.525 1525.58 711.215 1523.81 574.115 1491.49C508.331 1479.03 442.235 1467.98 376.655 1454.59L374.72 832.113C430.072 839.979 474.68 800.36 503.96 757.7C568.764 670.388 603.92 566.6 650.351 469.6C693.733 404.252 778.291 373.483 803.62 294.48C839.663 210.812 843.5 118.38 853.155 29.1C849.093 17.564 884.652 11.052 876.376 11.3307Z"/>
</svg>
                            </div>
                            <span>Will Watch</span>
                            <small>({movie.wtsCount})</small>
                        </div>
                        <div className='watching-rating-text wont-watch-wrapper'>
                            <div className='watching-image'>
                               <svg className='like-svg' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 1460 1530">
<path id="ThumbsUp" fill="#f9a203" stroke="none" stroke-width="0" transform="matrix(1,0,0,1,-9.17733,-10.9093)" d="M9.17733 859.815C9.17733 827.025 35.7587 800.444 68.548 800.444L254.272 800.444C287.061 800.444 313.643 827.025 313.643 859.815L313.643 1438.92C313.643 1471.71 287.061 1498.29 254.272 1498.29L68.548 1498.29C35.7587 1498.29 9.17733 1471.71 9.17733 1438.92ZM876.383 11.332C965.833 4.01467 1044.83 79.1853 1054.95 166.092C1073.2 259.504 1042.85 353.503 996.215 433.832C971.38 489.036 934.079 547.792 947.528 610.672C994.34 623.619 1052.67 609.076 1103.82 613.941C1187.46 615.889 1273.14 610.312 1354.95 630.228C1409.91 656.02 1445.93 715.133 1460.29 772.508C1456.79 825.152 1375.78 868.34 1430.27 921.868C1477.65 968.421 1451.91 1025.17 1407.78 1062.28C1367.11 1117.01 1458.17 1174.99 1416.25 1231.12C1385.82 1273.54 1325.56 1305.07 1341.08 1366.47C1348.18 1428.16 1287.72 1468.02 1243.89 1499.51C1166.71 1538.04 1076.33 1528.01 992.635 1530C852.525 1525.58 711.215 1523.81 574.115 1491.49C508.331 1479.03 442.235 1467.98 376.655 1454.59L374.72 832.113C430.072 839.979 474.68 800.36 503.96 757.7C568.764 670.388 603.92 566.6 650.351 469.6C693.733 404.252 778.291 373.483 803.62 294.48C839.663 210.812 843.5 118.38 853.155 29.1C849.093 17.564 884.652 11.052 876.376 11.3307Z"/>
</svg>
                            </div>
                            <span>Won't Watch</span>
                            <small>({movie.dwtsCount})</small>
                        </div>
                        <div className='watching-rating-text may-be-wrapper'>
                            <div className='watching-image'>
                            <svg className='like-svg' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 1460 1530">
<path id="ThumbsUp" fill="#b24142" stroke="none" stroke-width="0" transform="matrix(1,0,0,1,-9.17733,-10.9093)" d="M9.17733 859.815C9.17733 827.025 35.7587 800.444 68.548 800.444L254.272 800.444C287.061 800.444 313.643 827.025 313.643 859.815L313.643 1438.92C313.643 1471.71 287.061 1498.29 254.272 1498.29L68.548 1498.29C35.7587 1498.29 9.17733 1471.71 9.17733 1438.92ZM876.383 11.332C965.833 4.01467 1044.83 79.1853 1054.95 166.092C1073.2 259.504 1042.85 353.503 996.215 433.832C971.38 489.036 934.079 547.792 947.528 610.672C994.34 623.619 1052.67 609.076 1103.82 613.941C1187.46 615.889 1273.14 610.312 1354.95 630.228C1409.91 656.02 1445.93 715.133 1460.29 772.508C1456.79 825.152 1375.78 868.34 1430.27 921.868C1477.65 968.421 1451.91 1025.17 1407.78 1062.28C1367.11 1117.01 1458.17 1174.99 1416.25 1231.12C1385.82 1273.54 1325.56 1305.07 1341.08 1366.47C1348.18 1428.16 1287.72 1468.02 1243.89 1499.51C1166.71 1538.04 1076.33 1528.01 992.635 1530C852.525 1525.58 711.215 1523.81 574.115 1491.49C508.331 1479.03 442.235 1467.98 376.655 1454.59L374.72 832.113C430.072 839.979 474.68 800.36 503.96 757.7C568.764 670.388 603.92 566.6 650.351 469.6C693.733 404.252 778.291 373.483 803.62 294.48C839.663 210.812 843.5 118.38 853.155 29.1C849.093 17.564 884.652 11.052 876.376 11.3307Z"/>
</svg>
                            </div>
                            <span>Maybe</span>
                            <small>({movie.maybeCount})</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default MovieTrailerDetails