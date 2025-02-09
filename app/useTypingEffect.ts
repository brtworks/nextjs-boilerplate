import { useEffect, useState } from "react";

export function useTypingEffect(texts: string[], typingSpeed: number = 100, delay: number = 2000) {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let index = 0;
    const handleTyping = () => {
      if (!isDeleting && index < texts[currentTextIndex].length) {
        setTypedText((prev) => prev + texts[currentTextIndex][index]);
        index += 1;
        setTimeout(handleTyping, typingSpeed);
      } else if (isDeleting && index > 0) {
        setTypedText((prev) => prev.slice(0, -1));
        index -= 1;
        setTimeout(handleTyping, typingSpeed);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(handleTyping, delay);
        } else {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setTimeout(handleTyping, typingSpeed);
        }
      }
    };

    handleTyping();
  }, [currentTextIndex, texts, typingSpeed, delay, isDeleting]);

  return typedText;
}