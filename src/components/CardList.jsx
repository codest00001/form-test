import Card from "./Card";

export default function CardList(){
    return(
        <div>
            <h1>Containment 예제</h1>
            <Card>
                <h2>card 1 😎</h2>
                <p>첫번째 카드의 내용입니다</p>
            </Card>
            <Card>
                <h2>card 2 😊</h2>
                <p>두번째 카드의 내용입니다</p>
                <button>버튼클릭!</button>
            </Card>
        
            <Card>
                <h2>card 3 😍</h2>
                <img src="https://via.placeholder.com/150" alt="Placeholder" />
                <p>세번째 카드의 내용입니다</p>
            </Card>
        
        </div>
    )
}