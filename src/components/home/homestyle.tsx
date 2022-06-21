import styled from "styled-components";
export const Header = styled.header`
    height: 100vh;
    // padding-top: 7rem;
    overflow: hidden;

.header_container{
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    position: relative;
}
.hbtns{
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
}
.header_socials{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left:0;
    bottom: 3rem;
}
.header_socials::after {
    content:"";
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
}
.scroll_down{
    position: absolute;
    right: -2.3rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 0.9rem;
}
@media screen and (max-width: 600px){
.scroll_down,
.header_socials{
    display:none;
}
}
`; 
