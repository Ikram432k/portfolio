import styled from "styled-components";
export const Section = styled.section`
height: 75vh;
padding-top: 7rem;
overflow: hidden;

.card_container{
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    gap:1rem;
}
.contact_card{
    background: var(--color-bg-variant);
    border: 1px solid transparent;
    border-radius: 0.5rem;
    padding: 1rem;
    text-align: center;
}
.scroll_up{
    position: absolute;
    right: -1rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 0.9rem;
}
@media screen and (max-width: 600px){
.card_container{
    display:flex;
    // flex-direction: column;
}
.scroll_up{
    display:none;
}
}
`;