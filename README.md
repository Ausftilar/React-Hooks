# Использование хуков

## useStorageState

Этот хук предназначен для для облегчения работы с localStorage и sessionStorage.
Работать с ним очень просто, как с обычным useState. Вам не нужно думать сериализации и десиарилизации данных. Он все делает за вас

Возвращает массив из двух значений: состояние и функция для его изменения.

Принимает на вход объект: storage - local или session. Он определяет куда вы хотите записать данные
key - уникальный индификатор
InitialValue - принимает начальное значение или функцию для определения начального состояние. Если такой объект существует - передайте undefined

### Пример использования:

```
export function App() {
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

}
```

## useInput

Этот хук предназначен для работы с инпутом. Больше не надо к каждому инпуту создавать стейт и хендлер, он все сделает за вас.

Первым аргументом передается начальное значение, второй опциональный - маска, которая позволяет записать только элементы прошедшие проверку.
Возвращет:
    value - значение
    onChange - хендлер для обработки

В будещем добавлю обработку клавиш.

### Пример использования:

```
export function App() {
    const regExpNumbers = /^\d+$/;

    const userAge = useInput(0, regExpNumbers);
    const userLikeNumber = userInput(0, regExpNumbers);

    return (
        <div>
            <input {...userAge} type="text"/>
            <input {...userLikeNumber} type="text"/>
        </div>
    )
}
```

## useSaveLink

Этот хук создает референс и всегда предоставляет актуальное значение ссылки

Принимет начальное значние
Возвращает актуальное значние

### Пример использования:

```
export function App() {
    const [value, setValue] = useState('');
    const listPoints = new Set();

    const latestValue = useSaveLink(value);

    const updateValue = useCallback((newValue: SetStateAction<T>) => {
        setValue(newValue);

        const actualValue = isFunction(newValue)
            ? newValue(latestValue.current)
            : newValue;

        listPoints.add(actualValue);
    }, [latestValue]);
}
```
