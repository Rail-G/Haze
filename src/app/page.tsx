import LectureBlock from "@/components/lectureBlock/LectureBlock";
import NewsBlock from "@/components/newsBlock/NewsBlock";
import NewsBlog from "@/components/newsBlog/NewsBlog";
import NewsList from "@/components/newsList/NewsList";
import LectureForm from "@/form/lecture/Lecture";
import LoginForm from "@/form/login/Login";
import NewsForm from "@/form/news/News";
import RegistrationForm from "@/form/registration/Registration";
import TaskForm from "@/form/task/Task";


// export default function NewsBlog() {
//   return (
//     <>
//       <NewsBlog />
//       <NewsList />
//     </>
//   );
// }

// export default function NewsMain() {
//   return (
//     <>
//       <NewsBlock />
//       <NewsList />
//     </>
//   );
// }


export default function Form() {
  return (
    <>
      <NewsForm />
    </>
  );
}