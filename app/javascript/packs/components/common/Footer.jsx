import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.links}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Bio</a>
          <a href="#" style={styles.link}>Books</a>
          <a href="#" style={styles.link}>Contact</a>
        </div>
        <div style={styles.icons}>
          <a href='#'><FaInstagram color="white" /></a>
          <a href='#'><FaFacebook color="white" /></a>
          <a href='#'><FaTwitter color="white" /></a>
        </div>
      </div>
      <div className="image-container">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDw8NDRAPDQ8NDQ0NDw0NDRAPDQ0NFREWFhURFRUYHiggGBolGxUVITMhJSo3Li4uFx8zODMsNygtLisBCgoKDg0OFQ8PFy0dFR0rLSstKy0rLSsrKy4rLSstLSsrKy0rLS0rKy8rKy0vListKy0rKzctLTcrKy0tKystK//AABEIAJUBUQMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQMEAgUGB//EAE0QAAICAAIDCwUMBwUJAAAAAAABAgMEEQUSIQYWMUFRU2FxkZOhEyKBktEUFTIzQkNScpSxwfAjVGKCg8LSB2Oy0/EXJDRzhKKj4eL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAA2EQEAAgECAggDBgYDAQAAAAAAAQIRAxIEExQVITFBUVJhkZLRBVOhouHwIjJxgbHSQmLiwf/aAAwDAQACEQMRAD8A/cQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIbAhMqOiKAAIAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgFQ2EVzkagc1zEwLUzIlhTMI5ciiEwOkwJRACpAgBmAAkAAAAAAAAAAAAAAAAAAAAAABAACMwhmUSmQMwGYDMDmTKKLZGohJZ6bdpuYZiW6DOUtupMQOcwKZzNRCZTGQwLEyK6TIOgIbA5cgIUi4HaZBJFAJAAAAAAAAAAAAAAAAAAEARmVDMCMwIbA4ciiYzGB3rEEawBSA5mywMt8jcMywVW+fkdZjsc4ntetVI4TDrCyxmYVXKRpGSVm03hnKyuRJWF0ZGVWJkVLkBXKZcJlVK0uEytrJKwsTMqnMCUwOsyAFSAAAAAAAAAAAAAABDAhlRw2BzrlwGsMCHIqK5Mor8oXCZXQsMzC5S5ANYCJsQSx4iR0rDEvLU8rDvjsc89r28NLgPNaHaF9rMwss908kaiGZlgVmbOuGMtNcjEw1DRWzMtLFIzhcq52GohMs9lxqKszKaRKw1JmGk65BKkMDrXJhcpUxgdxZB0RUgAAAAAAAAAAAAAgI5ZRxIopmahlVrlwZda4wOXICqUjTLmu7IswRLQrDGGhzGA19gwMeJnsOlYYl5Fs8po9ER2OUz2vdwU88jy3h3q04iW0xVZYMZbkjrSGLSxV2HSYYiWyuZzmG8tMJmZhqJTO4kQZZbbzpFWZlXVteZZ7Ehtg8jlLcJ1xgylTGDI7RgyhWjBldWzMrDREw0sRBIUAAAAAAAAAAAEMDlsqOWwOJMorkaZZ5o1CSq18jWETrjA4nMsQjPOZuIR3ViDM1IlY7SYXKI3DaZZ8Tbwm6wzMvHxFnnJnprHY5TL3tGWZpHk1IdqS14ue30GKx2N2l4uPxHEejTq42lTTaamEiWym05zDcS0q7JGNrWVFmINRVmZURnrM3jDPe3VbDlPa3CzyhMLlKmTBlzK0uDLhSzLhGiqJiWoa6zEtromVWJkEkVIAAAAAAAAABAHLZUcORcDhyKmXLkMGXLZUVTNQks1qNwyzueRrCIlYXCZZ7bDUQkyyyvyZ025YysWLzRNi7lbxhdibnF+KzLWiTZ59lmZ3rVxtZ7ehbuBHk1qvTpy2aSvyk+g56dexu09r53E35yPbSnY8tr9qIXCakXa6cSc5q6RZ3PFmYou5V5bPYa24TLbQ8jnZuGhWmMNZdqwmBErRgyR2gaaomJlqGiCMS1C+LMqsUyYXLpTJhViZB0RUgAAAAAAAQBy2VFUpmohFMrC4TKt2GsJlz5UuDKPKDBly5jCZVWSNRCMtrNwzLLOzI6RDOWa243FWZljtsOtauVrKfKM6bHKdXCM2y7Ycra8J1WXbDE8TCPJsrnz8t2iLcrEuk8+vXsy+hw98rNL4n9JNLlaMaNOyG9bUxl5yrbPX2PmW1+0dbHYRrozaJtd665rk2ukamV1UznaHastcLjlNXSJXwtMTDWXflCYXK2BJWGms5y00QZmVd+VJhcnlhtMu42kwZWwsMzDWV8JmZhcrosyrpEVIAAAAAQwOZMqKLLDUQmWay43FWZllsvNxVnKiWINxVnKt4tF2JuPdXSNi7k+6RtNzmWILtTKiy81FUmWS246RViZZbJnSIYmWdvM7RDy6l8L8PhnJ5JN9CWYm0R3vFa82nFYzL2sHoaUuFavWeW/E1jub0+C1tTvjEe70YaDjxvsRwni58Ieuv2X52Z8XoTJNx87o4zdOKiZ7XHV+zr0jNJy8F1Ou2L/aX3nrt/FSWeD1cX2y7pwzusk0m85S+8m6KUjJxOpa+pNK9svao0I8tuSPNbio8F0/s3Ut227Fk9B7NjRmOK9nSfsu/hZ5eN0VOOeUW/q7fuPRTiKz4vLbhtbTntr2fF5NlTXCmuh8J6ImJWupjslwmSYeumothM5zD0VsvjYc5h0iV8LTMwuWiu4xMNZWrEpGdrW4eL6RsTcj3WNhudLEE2rlbC8k1XLVVaYmGolrqsOcw1EtNczEw0uizKuyKAAAEAcyZUZ7Jm4hJljuuOkVYmWC/EHWKsTLDbiTrFWJsyzxJuKMTZRLEG4oxN1bufKb2Oc6uEq+Q5cMdJiO917pfGTlNRxNZ8RWSlwKT6k2TbEd8tc2J7lleCunwQkumXm/eSdTTr4putPdCJ01Q+PxNNb44Rmpz7FtMTxEf8YWNO097qGksDXt/SW9Lg0v8Au1Ucba+pPjhvo9Z7+1qr3YYZbIxml0OrLwkcZjPbMukUmvZENNO7DDvjnHrUMvvJy1i1oethNOUW/Ati+t5feZnTmG41o8W92Ixh03w8XTtClXKxbJQ87PlSPXw95ids90vBxGlWbRqR/NE/GGzROGVVUV8ppOT6eQ5a2pN7ezrw2lGnXdP809s/Rrneks20kuFt5JHLD0TqQ8zF7o8PDY7U3yRWfjwGo05YnUme551u67D/ALb9T+o1FWZiWee6zCz82cZvrVUvDWzNRE17pYtTd3wonisDPgslQ39KE4x7WsvE7V19SO/tcujV8Owho/XWeHtqvX7E1n4ZnWOIrP8ANGCaWr3KbMLbHhrl6FmvA6xek90sTeY74VObXDs69hrZk50JVzJyzpFY8UO5l5cJ0jPcK1k2NxqZWRtMzV0iy2FxiatxZoruMTVqJa6rTnMNRLdRYc5huJehTI4zDcNcGYltYjKpAAQBDKjiaLAy2wZuJZl52IrZ2rMOcw8vERlyHesw5zEvPtbO1cONplRtbySbfItrOmMONrNdGirp/I1Vyzer4cPgYtr6dfFjZee6G+nQK+cs9EF+L9hxtxfphY4aZ/mlpnVh6FnPUj02yTb6k/wOFta9vF1rw1I8Pi83GbraYbKlO1r6EdSHa9vgc/6u8acvBxu7C+WytV0riyXlbO17PAZrDcaTxsZi77Pj7JyT4r7dWD6oZpdhne6RpqaqW/guya/uKmorrbyMzqS1FHcKkn8CpP8AvcRFy9MY5Mzulra9PDaPtllqKEVyxws9X1rI5eJMyuIbq9C28dmr/Dw+Xgy7pTbCZaFsW1WJ/wAOpPt2fedK6ksW04lrwekcRhvjFKdS4V8JRXLnFy1ets3mJcZ08dz2dIYuNuFnbW9aM65bVt4VwCs4li2nK/S+mI4aCcts57K6/lSfUZWKy+WxUsViXrWa0VwqMsoqK+rKUcuxmt0R3NxRxHQlnOJdVVJym8u0VhXZoe7ikn9arDyz9XNmd0tbYedisHOPxkav4ld1Pi8kXfJthlWGz+BCXXh7oW+Cyy7SxdmaKJQafwlrJ7FbF1zX73Bn6TpGqzOm9DC6axdKTVtur+21fU/S+BdRd8SxOk9vA7s58F1UZ8sqZNPL6ks/vROxidJ7uE3QYW1ZOUYt/Jugo+L83xLmY7pZnSz3w1WaLpsWtFOOfBKuXmv70da8TePHLhPC18IwwX6Bkttc4y6JJxf4nevF1n+aMMdHtHiwXYKyHw4SS5Us49qOsalLd0r2171KmamqxqQsjaZmjcakNNNxzmrpFno4a44Wq6xL1MPYcLQ6xLdVI5TDcNEWZV0RUgRkBDRUcSiyimaZqEUTfLl6WkXMIrlXB8Moeshvx3JtZ54fD8MvO6lKX+EvOt4SnLhw8XVBZVVWP/l0uK8cjM3tPfJy6sWI0rd83h8umbcvCJNy8uHlYq3GWcc4rkqjqJenYxuXY8qzRNrbbjLb8rVlPb08H3E3Su2FT0LY9mpn9acNXsco5dhMyuHcdBWvjqr6HbJrsqivFsirqNzeXDbq9FNEIv0TlnIDXDQFGzyine1tzxF057erYB6FGHhX8XCFf1IRhn6dgFuf5e0InW/P5YBv8/llHLX+q4vxRYlJh5WNl7lcrI/EX+bfWvgws4Y2pcWeWq+XNMuU2tODplOTxV6/T3LWefzFb+DTHkSWx5cLz6Bk2tkV+VsJMrEO8uj89pFQ/T2kEZ9OWfozAyYnRtNnxlNc8+PVUX2rJ+IGO3QVfyLL6l9HX8pX6ktniFY5bnpp5wsqk+WVcqZ5ddT+8CuehLOOEZdKsrk/HUl2sILQ9n0Z9nlPu4PWLmTENWFwWIredflIP+7cl2rg8S7k2w9bD6Rxcdk4q360HGXathdyTR6NOl385TbH6mVi/Au5idJdJ4e34cVm+OVU65etl+J0rr2r3S424as98M1ug65barVHocoyX4M714yfGGOiY7pVx0JNccZLljI1PE1luNGYbcNo1riZytqw6RR6VODaOM3dIq1wpyOcy3haokHRFAAAAB4GmtMLbVU+ic/wXtLhHzc710PqLgc+U6F4DA6UvzsGB0pDAnW6BgdJ9C7EMDpdXh/7GB0mMCc/zsGBKYwJTX+gwM+N0lTRHWvtqojy22Rgn2lisz3GXzWO/tIwFWahZZiGuKiltPqlLVT7TpGhefBN0PN/2sYfP/hsVly/oc+zWNdGt5puh9BoDdphMbJV02uFsuCi+OpZLoj8mT6E2YtpWr3rmHvTmks+DLl4EjMVyTLzY22YqtumiuVDeSsxWJjh425PPzVk21nypcB9GeC09P8Ah1rzFvKtd2P69sR/l4J46JmdkZiPGZiI/tnvWRx84WRoxNXkJ2ZuuUbI20W5LaozXHlxNGNXg4ik6mlbdWO/sxMf1h00eLi9tkxi39p+Ex2N/lElnwJbc+JHgw9mXyWlP7SMDTJwhKzFSTyfuaClDP68mov0NnSuhefZN0MFX9q+FbylRiorlSqll6NY10a3mm6Ht6P3d4C7ZHEwrk/k4iMqX2yWT9DMTo3jwXMPoK7YyWtFqSfBKLTT9KOeFTrdIwIb6uwYEZ9Xb7BgcyGBy/T4DAKTXG+1DAeVfLL1hgcu5/Sl6wwOJXS5ZdowZcuzlz7UMC7D4pwalCTi081k0MD6/RWk43x4o2RXnR/mXQZVvAAAAGfGYuNUJW2PKMFm8jdKTe0Vr3yze0VrNp7ofGaV3etZxw0Ks/pW2qT9WOxdp9XR+zI79S0/2j/7+jwX+0ax3RL5PGbpsbbLOdsJR4q/K6lfpjFZP05nungdHZtpG33xmf8APY4dYRnMxMsstK4l8KofXc/Yceqqeufl/VetKemUrSmI+jh+9l7DXVFPXPy/qnWtPTLr33xH0cN3k/YXqinrn5f/AEnWtfTKffnE8mG7yfsHU+n65+X/ANHWtfTJ794nkw3rWewvU+n65+WP9l60r6ZR7+Yrkwvbb7B1PT1z8sf7HWlfTKPf3F8mE/8AMOp6euflj/Y60r6Z/BD09jOL3H6Y3v8AmHU+n65+EfU6zr6Z/BXLTuP4pYBddV7/AJzXU+l6p+EfU6zr6ZcPTOkX87gF/Bt/GZOqNL1W+EfVes6+mfwUz0hpKXBjMJD6lMFl62ZeqdGPG3w/VOs6+mWHFYbSNqys0msnxQuhT/gyNR9m6Eer5f1Os49MvJluKslJyliMPOT4ZTxNbk+ttnWOD0Y9XyynWNfL/Dpbh58/hftdC/mL0bQ/7fLK9Pr+5j6m8a3iuwn27C/jMnR9D/t8lvodOr+5j6i3CYlNSrsw6lFqUZQx2EUoyW1NPyuxoxPDcP6rfJb6NxxsfuY+r7y/G3W0OE7MFButQt/3yLtexKeUUspZ7fgyfD6DjocFp6WrFv4rTE+ns9u3OYx7w563GzakxEYz79vwfM6QxMpNJPNRWUc9qSXQduN43o/8GnjfPbPsxwfCRqRut/L/AJatH3ymo168a3GUZwdk9WuFiea2vgWaR30tbT4jSm+O3GLRHf8AvycdXSnh9WJjw7vf9+L0d0zxOKw8sHVLC61rj5R0Y+qS8knnKDctVbfN4G9maPn04DSid02tER50n/EZ/HD3Rx3t+MS+N3hYhcMsOuvG4P8AzT1Rw3D+q3yW+iTxkR4fjBvGt47MKv8ArcJ/mGujaHnb5LfRjp1fL8Y+rmW4izncN9rwz/nJ0TRnxt8ljrCvl/hZhdy2JpedGKhQ88/0OMrhm+nVntMzwGjbxn5JOsq+UvYou0rXs931WLks9zz8eHxOc/ZWjP8Ayn5ZXrOvlLXHTOk1w2YGXXV/TNE6n0vXPwXrOnpldDdBpBfCWCl1Kxfzsk/Y1PC8/L+p1nTylYt0eN46sK+qdi/EnU1fvPy/qdZ08pdLdHi+Zw3otkOpq/efl/U6zp5J3x4rmKO/fsHU1fvPy/qnWdPJO+HFfq9P2n/5J1NX7z8s/U60p5Hv/iv1ar7Uv6R1NX7z8s/U600/JPv7if1av7XH+kdT0+9/LP1OtNPy/fwPfrE/qsPtcPYTqen3v5ZOtNL95+g9L4n9Wj9rr9hOqafe/lk600v3n6JhpnErgocemOLgmupraidV1icxqflles9Kf3L09F7tcfU8rYK+Gfzk63NL60Wnn0vM6av2dw9o79tvbOPhJX7Rr55j+kvs9Ebr6rso2QlRJ5LbOE4Z9aefgfL1uAvTtrO6PhP7/u9enxuleYjPa+kTPA9aQM2MwcbYuEuCSyaLE4keK9xuGfDCPqR9h05vsztRvLwv0I93H2Dmz5G1XZuMwy4K4d3H2F5vsbVW9LDc3Du4+wc32NpvSw/Nw7uPsHN9k2m9LD83Du4+wc32NpvRw/Nw7uPsHN9jab0cPzcO7j7BzfY2m9HD83Du4+wc32Nvub0cPzcPUiOb7G33N6OH5uHqRHN9jb7m9HD83Du4jm+xt9zejh+bh6kRzfY2e5vRw/Nw9SI5ps91ctyVPFXW/wByJY1U2K3uXpXzMPUia5ibXO9mnmoepEvMnzTasr3LUvhqhl9SInXtHjPxOXHkvW5TDr5uD/ciYrqzHd2Lame9mxO5iqL8yEcnyRRrOUiVte5ejJa1cHJ8sVsLv29sdiTG7sTPcjRxVwz+pExGtOc+LfL7MeDPLcvUvmoeojpz7T4z8WeXHkjexTzUPUiOdPmbIdR3J1P5qHqRJOt7rsWx3H0cdcPUiZ58ry3e8/D83Du4k58nLg3n4fm4d3Ec+Tlwbz8PzcO7iXnycuDefh+bh3cR0ixy4N5+H5uHdxHSLHLhG8/D83Du4jpFjlwbz8PzcO7iXpNvNOXBvPw/Nw7uI6Tbz/E5cG87Dc3Du4jpN/OficuEbzsNzcO7iOlX85+Jyqi3G4bm4d3EvSr+c/E5VfJdHcNhuOEO7iOlX85+Jyq+Sd42F+hDu4k6Vfzn4ryq+SzD7jMNCSlGEM4tNfoocPYZtxFpjEysacQ+ihDLjODbsAAAAAOHWBz5MCPJgNQCHECMgIyAASBOQE6oDVAagEagE6gDUArnWa3M7YdRr4xNsrEYdaplTUAjUAnVAaoDVAjJAQAAjLoAlICdUCdQAqwJ8mB1GGQHYAAAAAAAAAAAARkAyAZAMgGqA1QI1UA1UBOqAyAZAMgGQDIBqgMgGQDIBkAyAZANUCNVANVATqgNUBkAyAZASAAAAAAAAA//2Q=="
          alt="Sample Image"
          style={styles.image}
        />
        <div className="white-line"></div>
      </div>

      <div style={styles.copyright}>
        &nbsp;
        <br />
        &nbsp;
        Copyright © 2024 eBook Author | Powered by eBook Author
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000435',
    color: '#fff',
    padding: '20px 0',
    marginTop: '-17px',
    textAlign: 'center',
    height: '150px'
  },
  container: {
    maxWidth: '1600px',
    margin: '0 auto',
    position: 'relative',
  },
  links: {
    position: 'absolute',
    top: 'calc(50% + 30px)',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    transition: 'color 0.3s ease',
    fontSize: '14px',
  },
  icons: {
    position: 'absolute',
    top: 'calc(50% + 30px)',
    right: '0',
    marginRight: '350px',
    transform: 'translateY(-10%)',
    display: 'flex',
    gap: '20px',
  },
  image: {
    width: '150px',
    height: 'auto',
    marginLeft: '-850px',
    marginBottom: '50px',
  },
  copyright: {
    color: 'white',
    marginTop: '5px',
    marginBottom: '30px',
    fontSize: '14px',
  },
};

export default Footer;
