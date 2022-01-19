import {Button} from "./Button";
import {GenreResponseProps} from "../App";
import {FC} from "react";

interface SideBarProps {
    genres: GenreResponseProps[]
    handleClickButton: (id: number) => void
    selectedGenreId: number
}

export const SideBar:FC<SideBarProps> = ({genres, handleClickButton, selectedGenreId}) => {
    return (<nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
            {genres.map(genre => (
                <Button
                    key={String(genre.id)}
                    title={genre.title}
                    iconName={genre.name}
                    onClick={() => handleClickButton(genre.id)}
                    selected={selectedGenreId === genre.id}
                />
            ))}
        </div>
    </nav>)
}