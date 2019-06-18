import model.Student;

public class StudentTest {
    public static void main(String[] args) {
        Student student = new Student();
        student.setStudentName("小明");
        student.setStudentNumber("110");
        student.setStudentAge(12);
        student.setStudentSex("男");
        System.out.println("学生姓名为：" + student.getStudentName() + "  学号为：" + student.getStudentNumber()
                + "  年龄为：" + student.getStudentAge() + "  性别为：" + student.getStudentSex());
    }
}
