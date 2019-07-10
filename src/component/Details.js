import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import styled from 'styled-components';

export default function Details() {
    return (
        <ProductConsumer>
            {(value) => {
                const {company, thumbnailLink, info, title, description}= value.detailProducts;
                return (
                    <DetailsWrapper className="container py-5">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={thumbnailLink} className="detail-img" alt="product" />
                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>产品名称： {title}</h2>
                                {/* <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    制造地 : <span className="text-uppercase">{company}</span>
                                </h4> */}
                                <h4 className="text-blue">
                                    <strong>价格 : 请致电咨询</strong>
                                </h4>
                                {description ? 
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        关于产品:
                                    </p>
                                    :
                                    <div></div>
                                }

                                <p className="text-muted lead">{description}</p>
                                
                                <div>
                                    <Link to="/">
                                        <ButtonContainer>返回产品列表</ButtonContainer>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </DetailsWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const DetailsWrapper = styled.div`
    .detail-img{
        width: 400px;
        height: auto;
    }
`

