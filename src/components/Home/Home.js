import React from 'react';
import {FaHeart,FaRegHeart} from 'react-icons/fa';
import {AiTwotoneStar} from 'react-icons/ai';

export default function Home () {
  return (
    <div>
      <h1>
        Beautiful, Masterful design, <AiTwotoneStar /> never goes out of fashion
      </h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        {' '}
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        {' '}
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        {' '}
        It has survived not only five centuries, but also the leap into electronic typesetting,
        {' '}
        remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        {' '}
        and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src="..." alt="Gold jewelery" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a className="card-link m-1">Add to Cart</a>
              <FaRegHeart/>
            </div>
          </div>

        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src="..." alt="Gold jewelery" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a className="card-link m-1">Add to Cart</a>
              <FaRegHeart />
            </div>
          </div>

        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src="..." alt="Oxidized jewelery" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a className="card-link m-1">Add to Cart</a>
              <FaRegHeart />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
