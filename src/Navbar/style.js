import styled, {css} from 'styled-components';

const Df = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    background: #212121;
    width: 100%;
    height: 56px;
    ${Df};
    justify-content: space-between;
    padding: 0 32px 0 37px;
    /* position: fixed; */
    
`
const NavLeft = styled.div`
    ${Df};
    gap: 27px;

    > .menu-icon{
        transition: tranform .3s;
        cursor: pointer;

        :active {
            transform: scale(0.87);
        }
    }
`

const NavMid = styled.div`
    ${Df};
    position: relative;

    > #search-inp{
        width: 574px;
        height: 32px;
        background: #000000;
        outline: none;
        border: none;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 2px 0px 0px 2px;
        color: white;
        padding-left: 10px;
    }

    > .search-btn {
        ${Df};
        position: absolute;
        top: 0;
        right: 0;
        width: 65px;
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0px 2px 2px 0px;
        border: none;
        outline: none;
        transition: transfrom .3s;


        :active{
            transform: scale(.87);
        }
    }
`

const NavRight = styled.div`
    ${Df};
    width: 200px;
    justify-content: space-between;

    > .bell-icon{
        transition: all .3s;

        :active{
            transform: rotate(-20deg);
        }
    }

    > .btn-act {
        transition: transfrom .3s;

        :active{
            transform: scale(.87);
        }
    }
`


export {Container, NavLeft, NavMid, NavRight}