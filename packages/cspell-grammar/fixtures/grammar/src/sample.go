package main

import "fmt"

type IMethod interface {
	Method()
}

type TStruct struct {
	Sample string
}

func (t *TStruct) Method() {
	if t == nil {
		fmt.Println("<nil>")
		return
	}
	fmt.Println(t.Sample)
}

func main() {
	var i IMethod

	var t *TStruct
	i = t
	describe(i)
	i.Method()

	i = &TStruct{"hello"}
	describe(i)
	longname(i)
	i.Method()
}

func describe(i IMethod) {
	fmt.Printf("(%v, %T)\n", i, i)
}

func longname(i IMethod) {
	fmt.Printf("(%v, %T)\n", i, i)
}

/* Deliberate misspelling: garbbage. */
