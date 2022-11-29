import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";

import styles from "./Post.module.css";
import { useState } from "react";

interface Props {
  author: {
    nickUrl: string;
    name: string;
    role: string;
  };
  time: Date;
  content: any[];
}

export function Post({ author, time, content }: Props) {
  const [comment, setComment] = useState(["Post muito bacana, hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormated = format(time, " d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(time, {
    locale: ptBR,
  });

  function handleCreateNewComment(e: any) {
    e?.preventDefault();

    const newCommentText = e.target.comment.value;
    setComment([...comment, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(e: any) {
    e.target.setCustomValidity("");
    setNewCommentText(e.target.value);
  }

  function deleteComment(commentToDelete: any) {
    const commentsWithoutDeletedOne = comment.filter((comment) => {
      return comment != commentToDelete;
    });
    setComment(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(e: any) {
    e.target.setCustomValidity("Campo obrigatório!");
    setNewCommentText(e.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar nick={author.nickUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormated} dateTime={time.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comment.map((comment, index) => (
          <Comment
            key={index}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
