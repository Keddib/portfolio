import Head from 'next/head';
import Button from 'src/components/button';
import Layout from 'src/components/layout';
import Title2 from 'src/components/title2';
import Title3 from 'src/components/title3';
import Number from 'src/components/number';

export default function Home() {
  return (
    <Layout home="Keddib - Home">
      <div className='border border-red'>
        <section className='mt-32 section--default pt-4/24 md:mt-3/24 md:pt-1/24 border'>
          <div className='grid grid-cols-24 gap-x-2.5 border border-secondary-dark'>
            <div className='col-start-3 col-end-23 xl:col-end-19  border border-red'>
              <Number>01</Number>
              <Title2>This is DASH</Title2>
              <p className='paragraph'>Our digital approach to making work work changed the face of our industry. Now we're working on becoming the best in worktech.</p>
              <Title3>Why we DASH</Title3>
            </div>
          </div>
        </section>
        <section className='section--default border'>
          <div className='grid grid-cols-24 border border-secondary-dark'>

            <div className='flex flex-col justify-end  items-start  col-start-3 col-end-22 lg:col-end-10  border border-red'>
              <h3>01</h3>
              <h2>about</h2>
              <p>We're aiming to change the way the world works. By creating exciting tech that revolutionizes job boards. Reshapes temporary staffing. Rethinks recruitment. By challenging business as usual.</p>
            </div>

            <div className='col-start-1 col-end-25 lg:col-start-10 border border-red h-64'>
              image
            </div>

          </div>
        </section>
        <section className='section-default border'>
          moving text and pattern
        </section>
        <section className='section--default pb-3/24 md:pb-2/24'>
          <div className='grid grid-cols-24 gap-x-2.5'>
            <div className='col-start-3 col-end-25 md:col-start-3 md:col-end-17 lg:col-end-13 border'>
              <div className='flex flex-col md:flex-row'>
                <div>
                  <span>02</span>
                  <h2>what we believe</h2>
                </div>
                <div className='flex flex-col pt-4 md:pt-11'>
                  <p>Our digital approach to making work work changed the face of our industry. Now we're working on becoming the best in worktech.</p>
                  <a>
                    <span>discover our story</span>
                  </a>
                  <Button text={"Sign up"} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-default border'>
          <div className='relative grid grid-cols-24 gap-y-4/24 md:gap-y-0 md:gap-x-2.5 py-2/24'>
            <div className='order-2 md:order-1 col-start-3 col-end-23 md:col-start-3 md:col-end-19'> text </div>
            <div className='z-10 w-full h-full pb-[100%] md:pb-0 md:absolute col-start-2 col-end-24 md:col-start-12 lg:col-start-14'> images</div>
          </div>
        </section>
        <section className='section-default border'>
          <div className='relative grid grid-cols-24'>
            <div className='col-start-3 col-end-22 lg:col-start-13 lg:col-end-19 order-2'></div>
            <div className='col-start-1 col-end-25 lg:col-start-1 lg:col-end-12 order-1 '>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
