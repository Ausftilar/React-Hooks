# useStorageState

Этот хук предназначен для для облегчения работы с localStorage и sessionStorage.
Работать с ним очень просто, как с обычным useState. Вам не нужно думать сериализации и десиарилизации данных. Она все делает за вас

Возвращает массив из двух значений. состояние и функция для его изменения.

Принимает на вход объект: storage - local или session. Он определяет куда вы хотите записать данные
key - уникальный индификатор
InitialValue - принимает начальное значение, или функцию для определения начального состояние. Если такой объект существует - передайте undefined

## Пример использования:

`export function App() {
const [state, setState] = useStorageState({
storage: 'local',
key: 'test',
initialState: [{id: 1, name: Mikhail}, {id: 2, name: Ivan}],
});

    setState(state.push({id: 3, name: Oleg}))

    return {
        <ul className="list_names">
            {state.map(({name, id}) => {
                <li id={key}>
                    {name}
                </li>
            })}
        </ul>
    };

}`
