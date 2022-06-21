import styled from "styled-components";
export const Section = styled.section`
    height: auto;
    text-align: center;
    padding-top: 3.5rem;

.project_container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}
.project_item{
    display:flex;
    align-items: center;
    background: var(--color-bg-variant);
    padding: 1.2rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    transition: var(--transition);
    text-align: center;
    margin: 0.5rem;
    cursor: pointer;
    transition: transform 200ms linear;
    img {
      width: 2rem;
      object-fit: cover;
    }
}
.project_item:hover{
    border-color: var(--color-primary-variant);
    background: transparent;
}
h3{
    margin-left: 5px;
}
@media screen and (max-width: 600px){
    .project_container{
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    .project_item{
        justify-content: center;
        width:10rem;
    }
}
`;