import React from 'react';
import styled from 'styled-components';
import blogs from './blog.data'
import TitleComponent from '../title.component/title.component';
import { MainLayout, InnerLayout } from '../../global-styles/layout-styles';

const BlogsPage = () => {
    return (
        <MainLayout>
        <TitleComponent  title={'Blogs'} span={'Blogs'} />
        <BlogStyled>
        <InnerLayout className={'blog'}>
        {
            blogs.map((blog) => {
               
                return <div key={blog.id} className={'blog-item'}>
                
                    <div className="image">
                        <img src={blog.image} alt=""/>
                    </div>
                    <div className="title">
                        <a href={blog.link}>
                            {blog.title}
                        </a>
                    </div>
                </div>
            })
        }
        </InnerLayout>
        </BlogStyled>
        </MainLayout>
       
    );
};

const BlogStyled = styled.div`
    .blog{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }
        .blog-item{
            background-color: var(--background-dark-grey);
            padding: 1rem 1rem;
          
           
        
        .image{
            width: 100%;
            overflow: hidden;
            padding-top: 0.5rem;
            
            img{
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
                }
            }
        }
        .title{
            a{
                display: flex;
                justify-content: left;
                text-align: left;
                font-size: 1.5rem;
                padding: 0.1rem 0.8rem;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                background-color: var(--background-dark-grey);
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
        }
    }
`;


export default BlogsPage;