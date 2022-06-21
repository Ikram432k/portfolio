import styled from "styled-components";
export const Section = styled.section`
    height: auto;
    padding-top: 3.5rem;

.project_container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
}
.project_item{
    background: var(--color-bg-variant);
    padding: 1.2rem;
    border-radius: 1rem;
    border: 1px solid transparent;
    transition: var(--transition);
}
.project_item:hover{
    border-color: var(--color-primary-variant);
    background: transparent;
}
.project_img{
    // width:20rem;
    // heigth:auto;
    // object-fit:contain;
    border-radius: 1rem;
    overflow: hidden;
}
.project_item h3{
    margin: 1.2rem 0 2rem;
}
.project_item-btn{
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}
@media screen and (max-width: 1024px){
    .project_container{
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
}
}
@media screen and (max-width: 600px){
    .project_container{
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
}
}
`;